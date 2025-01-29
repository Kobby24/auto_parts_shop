from datetime import datetime
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import PBKDF2PasswordHasher
import django
from django.db.models import Q

from .models import Model, CustomUser, Region, City, Brands, Part
from random import randint,shuffle

import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'main_app/auto_parts_app/auto_parts_app/settings.py')  # Update 'main_app.settings' to match
# your settings module path
django.setup()


def cut(d: list):
    shuffle(d)
    if len(d) > 12:
        r = randint(0 + 12, (len(d)) - 12)
        return d[(r - 12):r]


class MyBackend(BaseBackend):
    def authenticate(self, request, email=None, password=None):
        try:
            user = CustomUser.objects.get(email=email)
        except:
            return [False]
        else:
            if user.password == password:
                user.last_login = time_now()
                return [True, True]
            else:
                return [True, False]


def time_now():
    return datetime.now()


def password_h(pwd):
    hasher = PBKDF2PasswordHasher()
    salt = '345'
    return hasher.encode(password=pwd, salt=salt)


def get_city(region):
    city_list = []
    selected_region = Region.objects.get(region=region)
    region_id = selected_region.region_id
    cities = City.objects.all().filter(region=region_id)
    for city in cities:
        city_list.append(city.city)
    return city_list


def regions():
    region_data = []
    regions_ = Region.objects.all()
    for region in regions_:
        dic = {
            'id': region.region_id,
            'region': region.region,
            'cities': get_city(region.region)
        }
        region_data.append(dic)
    return region_data


def get_model(brand):
    model_data = []
    brand_selected = Brands.objects.get(brand=brand)
    brand_id = brand_selected.brand_id
    models = Model.objects.all().filter(brand=brand_id)
    for model in models:
        model_data.append(model.model)

    return model_data


def brands():
    brand_data = []
    brands_ = Brands.objects.all()

    for brand in brands_:
        dic = {
            'id': brand.brand_id,
            'brand': brand.brand,
            'models': get_model(brand.brand)
        }
        brand_data.append(dic)
    return brand_data


def get_years(start=1998, end=2025):
    return [year for year in range(start, end + 1)]


def get_city_id(city):
    cities = City.objects.get(city=city)
    return cities


def get_part_pic(id_: list):
    pics = []
    for i in id_:
        parts = Part.objects.all().filter(model=i)
        for part in parts:
            pics.append({'part_price': part.price, 'pic_url': part.pic_url})

    return pics


def get_part_by_brand(parm: str):
    model = get_model(parm)
    model_ids = []
    part_dic = []
    for m in model:
        mod = Model.objects.get(model=m)
        model_ids.append(mod.model_id)
    parts = get_part_pic(model_ids)
    for i in parts:
        part_name = (((((i['pic_url']).split('/'))[3]).split('.'))[0]).title()
        part_dic.append({'part_name': part_name, 'part_pic': i['pic_url'], 'part_price': i['part_price']})
    return cut(part_dic)


def get_part(part_name):
    join = "-".join(part_name.split('-')[:3])

    part = Part.objects.filter(pic_url__icontains=part_name)[0]
    r_list = get_related_part(join)
    part_name = ((((part.pic_url.split('/'))[3]).split('.'))[0]).title()
    return [part.pic_url, part.price, part.body, r_list, part_name]


def get_related_part(parm: str):
    related_parts = Part.objects.filter(pic_url__icontains=parm)
    part_dic = []
    for r in related_parts:
        part_name = ((((r.pic_url.split('/'))[3]).split('.'))[0]).title()
        part_dic.append({'part_name': part_name, 'part_pic': r.pic_url, "part_price": r.price})
    return part_dic


def get_metalic():
    part_dic = []
    for i in ['door','bonnet','fender']:
        part_dic+=get_related_part(i)
        print(part_dic)
    return part_dic


def get_light():
    return get_related_part("light")


def get_bumper():
    return get_related_part("bumper")
