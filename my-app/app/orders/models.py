from django.db import models
from auto.models import Auto
from clients.models import Client

class Order(models.Model):
    car = models.ForeignKey(Auto, on_delete=models.CASCADE)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    supply_date = models.DateField()
    purch_date = models.DateField()

    def __str__(self) -> str:
        return str(self.client.username) + "->" + str(self.car.brand)
