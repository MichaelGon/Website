from django.shortcuts import render
from re import U
from .serializers import AutoSerializer
from .models import Auto
from rest_framework import viewsets

class AutoViewSet(viewsets.ModelViewSet):
    serializer_class = AutoSerializer
    queryset = Auto.objects.all()