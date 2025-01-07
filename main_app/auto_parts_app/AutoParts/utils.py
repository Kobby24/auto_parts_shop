from datetime import datetime
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import PBKDF2PasswordHasher
import django
from .models import Model, AuthUser

import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'main_app/auto_parts_app/auto_parts_app/settings.py')  # Update 'main_app.settings' to match your settings module path
django.setup()

class MyBackend(BaseBackend):
    def authenticate(self, request, email=None,password=None):
        try:
            user = AuthUser.objects.get(email=email)
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
    pass






