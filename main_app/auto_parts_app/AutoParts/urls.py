from . import views
from django.urls import path

urlpatterns = [
    path("", views.home, name="home"),
    path("login/", views.login, name="login"),
    path("signup/", views.signup, name="signup"),
    path("shop/",views.main_shop,name="main_shop"),
    path("reset/",views.reset_password,name="reset_password")
]
