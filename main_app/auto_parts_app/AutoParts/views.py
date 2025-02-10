from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import CustomUser
from .utils import password_h, time_now, MyBackend, regions, brands, get_years, get_city_id, get_part_by_brand, \
    get_part, get_light, get_bumper, get_metalic

from django.contrib.auth import authenticate

# Create your views here.

brand_list = brands()
years = get_years()


def home(request):
    # try:
    #     # user = CustomUser.objects.get(username)
    #     u = CustomUser.is_authenticated
    #
    #     # if user.is_active == 1:
    #     #     return render(request, 'home.html', {'brands': brand_list, 'years': years, 'is_logged_out': True})
    #
    #
    #
    # except:
    return render(request, 'home.html', {'brands': brand_list, 'years': years})


def login_(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username)

        user_ = authenticate(request, username=username, password=password)

        if user_ is not None:
            login(request, user_)
            return redirect("home")
        else:
            messages.success(request, "There was an error logging in")
            print("some")
            return redirect("login_")
    return render(request, "registration/login.html", {})


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

            return home(request, username)
        except:
            return signup(request)
    else:
        region_list = regions()

        return render(request, 'signup_form.html', {"regions": region_list})


def main_shop(request, brand):
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

    return render(request, 'main.html', {'brands': brand_list, 'years': years, 'brand': brand, 'part': part})


def reset_password(request):
    return render(request, 'reset_password.html')


def buy(request):
    return render(request, 'payment.html')


def product(request, prod_name):
    det = get_part(prod_name.lower())

    return render(request, 'product.html', {'brands': brand_list, 'years': years, 'name': prod_name, 'det': det})
