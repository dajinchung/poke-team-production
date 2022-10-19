from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

    password = serializers.CharField(write_only=True) # never send this out

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"]) # hashes our password
        return super().create(validated_data)

class PokemonTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonTeam
        fields = ['id', 'team_name', 'creator', 'pokemon']


class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ['name', 'description', 'img_url']