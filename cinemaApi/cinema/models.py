from django.db import models

class Film(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=200)
    limit_age = models.IntegerField()
    image = models.URLField()
    synopsis = models.TextField()
    additionnal_price = models.BooleanField()
    seance = models.ManyToManyField('Seance', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Seance(models.Model):
    salle = models.CharField(max_length=100)
    time = models.DateTimeField()
    limit_place = models.IntegerField()
    booked_place = models.IntegerField()

    def __str__(self):
        return self.name
    
class SpecialFilm(models.Model):
    salle = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=200)
    limit_age = models.IntegerField()
    image = models.URLField()
    synopsis = models.TextField()
    price = models.FloatField()
    additionnal_price = models.BooleanField()
    limit_place = models.IntegerField()
    booked_place = models.IntegerField()

    def __str__(self):
        return self.name    