from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views_auth import handle_login, handle_logout
from .views import *

# create router instance
router = DefaultRouter()

# add in the views sets that will manage resource actions
# router.register("task-lists", TaskListViewSet, basename="task-list")
# router.register("tasks", TaskViewSet, basename="task")
router.register("teams", PokemonTeamViewSet,basename="team")
router.register("pokemons", PokemonViewSet, basename="pokemon")
router.register("users", UserViewSet, basename="user")

# generate urls
urlpatterns = [
    path("", include(router.urls)),
    path("login/", handle_login),
    path("logout/", handle_logout),
]