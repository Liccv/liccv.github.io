from django.db import models

class Language(models.Model):
    language = models.CharField(max_length = 30)

    def __str__(self):
        return self.language


class Color(models.Model):
    language = models.ForeignKey(Language, on_delete = models.CASCADE)
    color = models.CharField(max_length=20)

    def __str__(self):
        return self.color


class Pattern(models.Model):
    language = models.ForeignKey(Language, on_delete = models.CASCADE)
    pattern = models.CharField(max_length = 20)

    def __str__(self):
        return self.pattern


class CharacterTrait(models.Model):
    language = models.ForeignKey(Language, on_delete = models.CASCADE)
    character_trait = models.CharField(max_length = 20)

    def __str__(self):
        return self.character_trait


class Cat(models.Model):
    language = models.ForeignKey(Language, on_delete = models.CASCADE)
    name = models.CharField(max_length = 50)
    image = models.ImageField(upload_to = 'photos/')
    short_description = models.CharField(max_length = 250)
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


class WebsiteContent(models.Model):
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    title = models.CharField(max_length = 15)
    button_text = models.CharField(max_length = 30)
    years_text = models.CharField(max_length = 15)
    appearance_label = models.CharField(max_length = 30)
    colors_text = models.CharField(max_length = 30)
    pattern_text = models.CharField(max_length = 30)
    care_label = models.CharField(max_length = 30)
    difficulty_text = models.CharField(max_length = 30)
    character_label = models.CharField(max_length = 30)
    traits_text = models.CharField(max_length = 30)

    def __str__(self):
        return self.title