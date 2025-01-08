import pprint

from django.shortcuts import render, redirect
from .models import Model, CustomUser
from django.contrib.auth import authenticate
from .utils import password_h, time_now, MyBackend,regions,brands


# Create your views here.


def home(request):
    brand_list = brands()
    pprint.pprint(brand_list)
    return render(request, 'home.html',{'brands':brand_list})


def login(request):

    hid = False
    if request.method == "POST":

        email_ = request.POST.get('email')
        password = request.POST.get('password')
        password = password_h(password)
        user_ = MyBackend()
        is_verified = user_.authenticate(password=password, email=email_, request=request)

        if is_verified[0]:
            if is_verified[1]:
                return home(request)
            else:
                hid = True
                message = "Wrong password rest it"
                return render(request, "login_form.html", {'hid': hid, 'message': message})

        else:
            hid = True
            message = 'Sorry no account found Sign Up'
            return render(request, "login_form.html", {'hid': hid, 'message': message})
    return render(request, "login_form.html", {'hid': hid})


def signup(request):
    if request.method == "POST" and request.POST:

        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        username = request.POST.get('username')
        email_ = request.POST.get('email')
        address = request.POST.get('address')
        phone = request.POST.get('phone')
        city = request.POST.get('city')
        password = request.POST.get('password')
        password = password_h(password)

        get_in = CustomUser(
            is_superuser=False,
            is_staff=False,
            username=username,
            password=password,
            email=email_,
            last_name=lname,
            first_name=fname,
            last_login=time_now,
            is_active=True,
            date_joined=time_now(),
            address=address,
            city=city,
            phone=phone)
        get_in.save()
        return home(request)
    else:
        region_list = regions()

        return render(request, 'signup_form.html',{"regions":region_list})


def main_shop(request):
    brand_list = brands()
    return render(request, 'main.html',{'brands':brand_list})


def reset_password(request):
    return render(request, 'reset_password.html')
