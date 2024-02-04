from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ["id", "last_login", "username", "first_name", "last_name", "email", "date_joined", "car_num", "privilege_level", "groups", "password"]