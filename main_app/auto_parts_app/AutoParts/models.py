from django.db import models
from django.contrib.auth.models import AbstractUser


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class Region(models.Model):
    region_id = models.AutoField(primary_key=True)
    region = models.TextField(unique=True)

    class Meta:
        managed = True
        db_table = 'region'


class CustomUser(AbstractUser):
    address = models.TextField(blank=True, null=True)
    region = models.TextField()
    city = models.ForeignKey('City', models.DO_NOTHING, null=True)
    phone = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(CustomUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(CustomUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Brands(models.Model):
    brand_id = models.AutoField(primary_key=True)
    brand = models.TextField(unique=True)

    class Meta:
        managed = True
        db_table = 'brands'


class City(models.Model):
    city_id = models.AutoField(primary_key=True)
    region = models.ForeignKey(Region, models.DO_NOTHING, db_column='region')
    city = models.TextField()

    class Meta:
        managed = True
        db_table = 'city'


class DjangoAdminLog(models.Model):
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(CustomUser, models.DO_NOTHING)
    action_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Model(models.Model):
    model_id = models.AutoField(primary_key=True)
    model = models.TextField()
    brand = models.ForeignKey(Brands, models.DO_NOTHING, db_column='brand', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'model'


class Part(models.Model):
    part_id = models.AutoField(primary_key=True)
    part = models.TextField()
    pic_url = models.TextField()
    price = models.IntegerField()
    year = models.TextField()
    body = models.TextField()
    model = models.ForeignKey(Model, models.DO_NOTHING, db_column='model',null=True,blank=True)

    class Meta:
        managed = True
        db_table = 'part'


class PaymentHistory(models.Model):
    payment_id = models.AutoField(primary_key=True)
    payment_date = models.TextField()
    parts_purchased = models.TextField()
    user = models.ForeignKey(CustomUser, models.DO_NOTHING, db_column='user')

    class Meta:
        managed = True
        db_table = 'payment_history'
