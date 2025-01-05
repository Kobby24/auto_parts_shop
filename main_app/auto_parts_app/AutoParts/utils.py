from datetime import datetime
# from django.contrib.auth.backends import BaseBackend
import django
from .models import Model, AuthUser

import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'main_app/auto_parts_app/auto_parts_app/settings.py')  # Update 'main_app.settings' to match your settings module path
django.setup()

# class MyBackend(BaseBackend):
#     def authenticate(self, request, email=None,password=None):
#         # user = AuthUser.objects.filter(email=email)
#         return user



def time_now():
    return datetime.now()





