from django.db import models
from clients.models import Client

class Service_order(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    date = models.DateField()
    car_num = models.CharField(max_length=15)

    def __str__(self) -> str:
        return str(self.client.username) + "->" + str(self.date)
