from django.contrib.auth import authenticate, login, logout, user_logged_in
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import CustomUser
from .utils import *

from django.contrib.auth import authenticate

# Create your views here.

brand_list = brands()
years = get_years()
user_ = None


def check_user(user):
    if user is not None:
        user = user.is_authenticated
        return user
    else:
        user = False
        return user


def home(request):
    global user_

    return render(request, 'home.html', {'brands': brand_list, 'years': years, 'user': check_user(user_)})


def login_(request):
    global user_
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user_ = authenticate(request, username=username, password=password)
        if user_ is not None:
            login(request, user_)

            return redirect("home")
        else:
            messages.success(request, "There was an error logging in")
            return redirect("login_")
    return render(request, "registration/login.html", {})


def logout_(request):
    global user_
    logout(request)
    return redirect('home')


def signup(request):
    print("some")
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
        try:
            get_city = get_city_id(city)
            get_in = CustomUser(
                is_superuser=False,
                is_staff=False,
                username=username,
                password=password,
                email=email_,
                last_name=lname,
                first_name=fname,
                last_login=time_now(),
                is_active=True,
                date_joined=time_now(),
                address=address,
                city=get_city,
                phone=phone)
            get_in.save()
            user_ = authenticate(request, username=username, password=password)
            print(user_)
            if user_ is not None:
                login(request, user_)
                return redirect("home")
        except:
            return signup(request)
    else:
        region_list = regions()

        return render(request, 'signup_form.html', {"regions": region_list})


def main_shop(request, brand):
    global user_
    part = ''

    if brand == "Toyota":
        part = get_part_by_brand(brand)
    elif brand == "Metalic":
        part = get_metalic()

    elif brand == "Light":
        part = get_light()
    elif brand == "Bumper":
        part = get_bumper()
    elif brand == "Honda":
        part = get_part_by_brand(brand)

    return render(request, 'main.html',
                  {'brands': brand_list, 'years': years, 'brand': brand, 'part': part, 'user': check_user(user_)})


def reset_password(request):
    return render(request, 'reset_password.html')


def buy(request):
    return render(request, 'payment.html')


def product(request, prod_name):
    global user_
    det = get_part(prod_name.lower())
    return render(request, 'product.html',
                  {'brands': brand_list, 'years': years, 'name': prod_name, 'det': det, 'user': check_user(user_),
                   "brand": True})

def search(request):

    brand = request.GET.get('brand')
    model= request.GET.get('model')
    year =request.GET.get('year')
    det = search_item(brand,model,year)
    if len(det)<6:
        det += get_related_part(model)
    global user_
    if det is not None:
        return render(request, 'product.html',
                  {'brands': brand_list, 'years': years, 'name': f"{brand} {model} {year}", 'det': det, 'user': check_user(user_),
                   "brand": True})
    else:
        return redirect('home')