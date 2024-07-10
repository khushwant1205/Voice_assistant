from django.shortcuts import render
from django.views.generic import TemplateView

def home(request):
    return render(request, 'home.html')

def aboutus(request):
    return render(request, 'aboutus.html')

def browsinghistory(request):
    return render(request, 'browsinghistory.html')

def login(request):
    return render(request, 'login.html')

def services(request):
    return render(request, 'services.html')

