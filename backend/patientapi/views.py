from django.shortcuts import render
from rest_framework import generics
from .models import Patient
from .serializers import PatientSerializer

# Create your views here.
class PatientList(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    
class PatientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer