from . import views
from django.urls import path

urlpatterns = [
    path("", views.home, name="home"),
    path("login_/", views.login_, name="login_"),
    path("signup/", views.signup, name="signup"),
    path("shop/<brand>", views.main_shop, name="main_shop"),
    path("reset/", views.reset_password, name="reset_password"),
    path('cart/', views.cart, name='cart'),
    path("product/<prod_name>", views.product, name='product'),
    path('logout_/',views.logout_,name="logout_"),
    path('search/',views.search,name='search')
]
