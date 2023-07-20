from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class SeanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seance
        fields = '__all__'

class FilmSerializer(serializers.ModelSerializer):
    seance = SeanceSerializer(many=True, read_only=True)
    class Meta:
        model = Film
        fields = '__all__'
        
class SpecialSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialFilm
        fields = '__all__'

        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, data):
        user = User.objects.create(username=data['username'])
        user.set_email(data['email'])
        user.set_password(data['password'])
        user.save()
        return user    