from django.db import models
from django.contrib.auth.models import AbstractUser

class Client(AbstractUser):
    car_num = models.CharField(max_length=20, default="")
    privilege_level = models.CharField(max_length=20, default="Standart")

    def __str__(self) -> str:
        return str(self.username)
