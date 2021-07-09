from django.db import models

class Client(models.Model):
    nome = models.CharField(max_length=30)
    sobrenome = models.CharField(max_length=30)
    idade = models.CharField(max_length=30)
    sexo = models.CharField(max_length=30)

# Create your models here.
