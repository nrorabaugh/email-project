from django.conf.urls import include
from django.urls import re_path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('user', views.UserView)
router.register('email', views.EmailView)
# router.register('chatmessage', views.ChatmessageView)

urlpatterns = [
    re_path('', include(router.urls))
]