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