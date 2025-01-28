import pprint

from django.shortcuts import render
from .models import CustomUser
from .utils import password_h, time_now, MyBackend, regions, brands, get_years, get_city_id, get_part_by_brand, get_part

from django.contrib.auth import authenticate


# Create your views here.


def home(request, user=''):
    brand_list = brands()
    years = get_years()

    try:
        user = CustomUser.objects.get(username=user)
        u = CustomUser.is_authenticated

        if user.is_active == 1:
            return render(request, 'home.html', {'brands': brand_list, 'years': years, 'is_logged_out': True})



    except:
        return render(request, 'home.html', {'brands': brand_list, 'years': years})


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
                return home(request, (CustomUser.objects.get(email=email_)).username)
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
    brand_list = brands()
    years = get_years()
    if brand == "Toyota":
        part = get_part_by_brand(brand)

    return render(request, 'main.html', {'brands': brand_list, 'years': years, 'brand': brand, 'part': part})


def reset_password(request):
    return render(request, 'reset_password.html')


def buy(request):
    return render(request, 'payment.html')


def product(request, prod_name):
    det = get_part(prod_name.lower())

    return render(request, 'product.html', {'name': prod_name, 'det': det})
