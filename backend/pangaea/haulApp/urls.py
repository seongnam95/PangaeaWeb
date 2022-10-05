from django.urls import path
from . import views


urlpatterns = [
    path('', views.main, name='main'),
    path('contract/', views.contract, name='contract'),
]
