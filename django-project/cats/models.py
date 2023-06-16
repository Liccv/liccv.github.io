from django.db import models

class Color(models.Model):
    color = models.CharField(max_length=20)

    def __str__(self):
        return self.color


class Pattern(models.Model):
    pattern = models.CharField(max_length = 20)

    def __str__(self):
        return self.pattern


class CharacterTrait(models.Model):
    character_trait = models.CharField(max_length = 20)

    def __str__(self):
        return self.character_trait


class Cat(models.Model):
    name = models.CharField(max_length = 50)
    history = models.CharField(max_length = 600)
    lifespan_min = models.IntegerField()
    lifespan_max = models.IntegerField()
    weight_min = models.IntegerField()
    weight_max = models.IntegerField()
    length_min = models.IntegerField()
    length_max = models.IntegerField()
    color = models.ManyToManyField(Color)
    pattern = models.ManyToManyField(Pattern)
    appearance = models.CharField(max_length = 600)
    care_difficulty = models.CharField(max_length = 15)
    care_description = models.CharField(max_length = 600)
    temperament = models.CharField(max_length = 600)
    character_traits = models.ManyToManyField(CharacterTrait)

    def __str__(self):
        return self.name