from django.shortcuts import render, redirect
from .models import User


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
        get_in = User(fname=fname, lname=lname, email=email_, address=address, phone=phone, country=country, city=city)
        get_in.save()

    return render(request, 'signup_form.html')
