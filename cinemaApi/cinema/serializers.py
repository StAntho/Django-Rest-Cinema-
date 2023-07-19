from rest_framework import serializers
from .models import *

class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = '__all__'
        
class SpecialSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialFilm
        fields = '__all__'