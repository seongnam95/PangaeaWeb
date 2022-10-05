from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('property/', views.PropertyList.as_view()),
    path('property/<int:pk>/', views.PropertyDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
