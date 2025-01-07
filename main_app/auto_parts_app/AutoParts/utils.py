from datetime import datetime
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import PBKDF2PasswordHasher
import django
from .models import Model, CustomUser,Region,City

import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'main_app/auto_parts_app/auto_parts_app/settings.py')  # Update 'main_app.settings' to match your settings module path
django.setup()

class MyBackend(BaseBackend):
    def authenticate(self, request, email=None,password=None):
        try:
            user = CustomUser.objects.get(email=email)
        except:
            return [False]
        else:
            if user.password == password:
                return [True,True]
            else:
                return [True,False]





def time_now():
    return datetime.now()

def password_h(pwd):
    hasher = PBKDF2PasswordHasher()
    salt='345'
    return hasher.encode(password=pwd,salt=salt)
def get_city(region):
    selected_region = Region.object.get(region=region)
    region_id = selected_region.region_id
    return City.object.all(region_id=region_id)

def regions():
    region_name=[]
    regions = Region.objects.all()
    for region in regions:
        region_name.append(region.region)
    return region_name








