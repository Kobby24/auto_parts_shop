from django.shortcuts import render, redirect
from .models import Model,AuthUser
from django.contrib.auth import authenticate
from .utils import password_h,time_now,MyBackend





# Create your views here.


def home(request):

    return render(request, 'home.html')


def login(request):
    if request.method == "POST":
        email_ = request.POST.get('email')
        password = request.POST.get('password')
        password = password_h(password)
        user_ = MyBackend()
        is_verified= user_.authenticate(password=password,email=email_,request=request)
        print(is_verified)
        if is_verified:
            return home(request)
        else:
            return signup(request)
    return render(request, "login_form.html")


def signup(request):
    if request.method == "POST" and request.POST:

        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        username = request.POST.get('username')
        email_ = request.POST.get('email')
        address = request.POST.get('address')
        phone = request.POST.get('phone')
        country = request.POST.get('country')
        city = request.POST.get('city')
        password = request.POST.get('password')
        password = password_h(password)


        get_in = AuthUser(
            is_superuser=False,
            is_staff = False,
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
        home(request)

    return render(request, 'signup_form.html')

def main_shop(request):
    return render(request,'main.html')

user = AuthUser.objects.get(email="kobbygilbert233@gmail.com")
print(user.password)


