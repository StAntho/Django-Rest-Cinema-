from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class FilmSerializer(serializers.ModelSerializer):
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
        fields = ['username', 'password']

    def create(self, data):
        user = User.objects.create(username=data['username'])
        user.set_password(data['password'])
        user.save()
        return user    