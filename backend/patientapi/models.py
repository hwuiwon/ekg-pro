from django.db import models

# Create your models here.
class Patient(models.Model):
    name = models.CharField(max_length=100, default="")
    patientid = models.CharField(max_length=10)
    date = models.DateTimeField(auto_now_add=True)
    doctor = models.CharField(max_length=100, default="")
    room = models.BigIntegerField(default="1")
    team = models.CharField(max_length=1, default="A")
    primary_diagnosis = models.CharField(max_length=100, default="")
    
    class Meta:
        ordering = ["patientid"]
    
    def __str__(self):
        return self.patientid