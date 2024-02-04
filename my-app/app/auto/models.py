from django.db import models

class Auto(models.Model):
    brand = models.CharField(max_length=70)
    orders_num = models.BigIntegerField(default=0)
    cost = models.BigIntegerField(default=0)
    image = models.ImageField(blank=True, upload_to="images/autos")
    engine = models.CharField(max_length=150)
    modif = models.CharField(max_length=150)
    config = models.CharField(max_length=150)

    def __str__(self) -> str:
        return self.brand
