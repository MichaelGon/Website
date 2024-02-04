from django.shortcuts import render
from re import U
from .serializers import ServiceOrderSerializer
from .models import Service_order
from rest_framework import viewsets

class ServiceOrderViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceOrderSerializer
    queryset = Service_order.objects.all()