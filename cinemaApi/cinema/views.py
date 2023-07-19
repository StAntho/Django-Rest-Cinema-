from django.shortcuts import render
from .serializers import FilmSerializer, SpecialSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Film, SpecialFilm

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

@api_view(['GET'])
def getSpecials(request):
    special = SpecialFilm.objects.all()
    serializer = SpecialSerializer(special, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSpecial(request, id):
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