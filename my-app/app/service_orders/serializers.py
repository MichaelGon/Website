from rest_framework import serializers
from .models import Service_order

class ServiceOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service_order
        fields = '__all__'