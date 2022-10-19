from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import *
from .views_auth import handle_login, handle_logout

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self): # this is a method that exists in ModelViewSet (or below)
        if self.request.method == "POST":
            return (permissions.AllowAny(),) #anyone allowed to create a user (must have , in a tuple)
        elif self.request.method == "PATCH":
            return (permissions.IsAuthenticated(),)
        return (permissions.IsAdminUser(),)


class PokemonTeamViewSet(ModelViewSet):
    # queryset = PokemonTeam.objects.all() #consider all teams
    serializer_class = PokemonTeamSerializer


    def perform_create(self, serializer): #user gets ownership of pokemon team in backend
        serializer.save(creator=self.request.user)
        return super().perform_create(serializer)
    
    def get_queryset(self): #must be named this to override funtionality
        if self.request.user.is_superuser:
            return PokemonTeam.objects.all() # if admin see all
        return PokemonTeam.objects.filter(creator=self.request.user) #filter based on user

class PokemonViewSet(ModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer