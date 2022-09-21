from django.db import models

# Create your models here.

class Propertys(models.Model):
    address = models.CharField(max_length=100)
    price = models.CharField(max_length=11)
    # rental = models.CharField(max_length=11)
    # loan = models.CharField(max_length=11)
    # earnest = models.CharField(max_length=11)
    # intermediate = models.CharField(max_length=11)
    updated_at = models.DateTimeField(auto_now=True)