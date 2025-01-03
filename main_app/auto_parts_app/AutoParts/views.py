from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Model,AuthUser


# Create your views here.

def home(request):

    return render(request, 'home.html')


def login(request):


    return render(request, "login_form.html")


def signup(request):
    if request.method == "POST":
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email_ = request.POST.get('email')
        address = request.POST.get('address')
        phone = request.POST.get('phone')
        country = request.POST.get('country')
        city = request.POST.get('city')
        password = request.POST.get('password')
        get_in = User.objects.create_user(username=fname+" "+lname, password=password,email=email_)

        get_in.save()

    return render(request, 'signup_form.html')

def main_shop(request):
    return render(request,'main.html')
