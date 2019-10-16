from django.contrib import admin
from .models import Speech


class SpeechAdmin(admin.ModelAdmin):
    list_display = ('tittle', 'preacher', 'date')


admin.site.register(Speech, SpeechAdmin,)