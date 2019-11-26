from django.contrib import admin
from .models import User,Email,Chatmessage

admin.site.register([User,Email,Chatmessage])
