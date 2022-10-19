from django.db import models
from django.contrib.auth.models import User

class Pokemon(models.Model):
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=255)
    img_url = models.URLField(blank=True)

    def __str__(self):
        return f"Pokemon: {self.name}"

class PokemonTeam(models.Model):
    team_name = models.CharField(max_length=64)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="teams")
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE, related_name= "pokemon")
    
    def __str__(self):
        return f"Pokemon Team: {self.team_name}"


# can there be multiple pokemon in multiple teams? yes
# can pokemon teams have multiple pokemon? yes