from winreg import HKEY_LOCAL_MACHINE
from django.contrib import admin

# Register your models here.
from django.contrib import admin
from haulApp.models.propertys import Propertys

admin.site.register(Propertys)
