from datetime import datetime
from django.contrib.auth.backends import BaseBackend
from .models import Model,AuthUser

class MyBackend(BaseBackend):
    def authenticate(self, request, email=None,password=None):
        user = AuthUser.objects.filter(email=email)
        return user



def time_now():
    return datetime.now()


