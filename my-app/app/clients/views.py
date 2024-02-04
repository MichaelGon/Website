from django.shortcuts import render
from re import U
from .serializers import ClientSerializer
from .models import Client
from rest_framework import viewsets, views, response

class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()

    def perform_create(self, serializer):
        client = Client.objects.create_user(**serializer.validated_data)
        client.set_password(serializer.validated_data["password"])
        return client
    
class ClientCurrent(views.APIView):
    def get(self, request):
        serializer = ClientSerializer(request.user)

        return response.Response(serializer.data)