from django.shortcuts import render
from re import U
from .serializers import OrderSerializer
from .models import Order
from rest_framework import viewsets

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()