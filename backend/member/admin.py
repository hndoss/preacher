from django.contrib import admin
from .models import Member

class MemberAdmin(admin.ModelAdmin):
    list_display = ('name','last_name','phone_number','sex')

# Register your models here.

admin.site.register(Member,MemberAdmin)