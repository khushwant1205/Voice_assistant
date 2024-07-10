from django.urls import path

from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('home.html', views.home, name='home'),
    path('aboutus.html', views.aboutus, name='aboutus'),
    path('browsinghistory.html', views.browsinghistory, name='browsinghistory'),
    path('login.html', views.login, name='login'),
    path('services.html', views.services, name='services'),
]