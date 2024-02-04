from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Client

class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + ((None, {'fields': ('car_num', 'privilege_level')}),)
    add_fieldsets = UserAdmin.add_fieldsets + ((None, {'fields': ('car_num', 'privilege_level')}),)

admin.site.register(Client, CustomUserAdmin)
