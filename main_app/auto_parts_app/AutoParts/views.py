from django.shortcuts import render, redirect
from django.contrib.auth.hashers import PBKDF2PasswordHasher
from .models import Model,AuthUser
from django.contrib.auth import authenticate
from . import utils





# Create your views here.

salt = "345"
def home(request):

    return render(request, 'home.html')


def login(request):
    if request.method == "POST":
        email_ = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(email=email_,password=password)

        if user is not None:
            return home(request)
        else:
            print("hmmm")
            print(user)



    return render(request, "login_form.html")


def signup(request):
    if request.method == "POST":
        time_now = utils.time_now()
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        username = request.POST.get('username')
        email_ = request.POST.get('email')
        address = request.POST.get('address')
        phone = request.POST.get('phone')
        country = request.POST.get('country')
        city = request.POST.get('city')
        password = request.POST.get('password')
        hasher = PBKDF2PasswordHasher()
        password_ = hasher.encode(password=password,salt=salt)

        get_in = AuthUser(
            is_superuser=False,
            is_staff = False,
            username=username,
            password=password_,
            email=email_,
            last_name=lname,
            first_name=fname,
            last_login=time_now,
            is_active=True,
            date_joined=time_now,
            address=address,
            city=city,
            phone=phone)
        get_in.save()
        home(request)

    return render(request, 'signup_form.html')

def main_shop(request):
    return render(request,'main.html')
