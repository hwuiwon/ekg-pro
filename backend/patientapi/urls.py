from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from patientapi import views

urlpatterns = [
    path("patientapi/", views.PatientList.as_view()),
    path("patientapi/<int:pk>/", views.PatientDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
