from django.shortcuts import render
from .serializers import FilmSerializer, SpecialSerializer, UserSerializer, SeanceSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import *
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from django.db.models.functions import Lower

@api_view(['GET'])
def getHome(request):
    film = Film.objects.all().order_by(Lower("id").desc())[0:2]
    specials = SpecialFilm.objects.all().order_by(Lower("id").desc())[0:2]
    serializerF = FilmSerializer(film, many=True)
    serializerS = SpecialSerializer(specials, many=True)
    return Response({'films':serializerF.data, 'specials':serializerS.data})  
    
@api_view(['GET'])
def getFilms(request):
    film = Film.objects.all()
    serializer = FilmSerializer(film, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFilm(request, id):
    film = Film.objects.get(id=id)
    serializer = FilmSerializer(film, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def addFilm(request):
    serializer = FilmSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteFilm(request, id):
    film = Film.objects.get(id=id)
    film.delete()
    return Response('Suppression du film réussie')

@api_view(['PUT'])
def updateFilm(request, id):
    film = Film.objects.get(id=id)
    serializer = FilmSerializer(instance=film, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PATCH'])
def bookSeance(request, id):
    try:
        seance = Seance.objects.get(id=id)
    except Seance.DoesNotExist:
        return Response({"message": "Seance not found."}, status=404)

    # Assuming you want to increase booked_place and decrease limit_place by 1
    seance.booked_place += 1
    seance.limit_place -= 1

    serializer = SeanceSerializer(instance=seance, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=400)

@api_view(['GET'])
def getSpecials(request):
    special = SpecialFilm.objects.all()
    serializer = SpecialSerializer(special, many=True)
    return Response(serializer.data)

# @api_view(['GET'])
class DetailSpecial(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, id):
        special = SpecialFilm.objects.get(id=id)
        serializer = SpecialSerializer(special, many=False)
        return Response(serializer.data)

@api_view(['POST'])
def addSpecial(request):
    serializer = SpecialSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteSpecial(request, id):
    special = SpecialFilm.objects.get(id=id)
    special.delete()
    return Response('Suppression de la programmation réussie')

@api_view(['PUT'])
def updateSpecial(request, id):
    special = SpecialFilm.objects.get(id=id)
    serializer = SpecialSerializer(instance=special, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

class RegisterUser(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=serializer.data['username'])
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'status':200, 'données':serializer.data, 'token':str(token)})
        return Response({'status':403, 'erreur':serializer.errors})   
    
class LoginUser(ObtainAuthToken):
    def post(self, request):
        serializer = self.serializer_class(data=request.data, context={'request':request})
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data['user']
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'status':200, 'user_id':user.id, 'token':str(token)})
        return Response({'status':403, 'erreur':serializer.errors})    
    

class LogoutUser(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self, request):
        user = request.user
        Token.objects.filter(user=user).delete()
        return Response({'status':200, 'message':'Déconnexion réussie'})
    
class ProfilUser(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = request.user
        token, _ = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(user)
        return Response({'status':200, 'données':serializer.data, 'token':str(token)})
    
    def put(self, request):
        user = request.user
        token, _ = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status':200, 'données':serializer.data, 'token':str(token)})
        return Response({'status':403, 'erreur':serializer.errors})
    
# class BookSeance(APIView):
#     authentication_classes = [TokenAuthentication]
#     permission_classes = [IsAuthenticated]
#     def post(self, request, id_seance):
#         seance = Seance.objects.get(id=id_seance)
#         serializer = SeanceSerializer(instance=seance, data=request.data)
#         user = request.user
#         token, _ = Token.objects.get_or_create(user=user)
#         serializer = UserSerializer(instance=user, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'status':200, 'données':serializer.data, 'token':str(token)})
#         return Response({'status':403, 'erreur':serializer.errors})
     
     