from rest_framework import viewsets
from .serializers import UserSerializer, EmailSerializer
from .models import User, Email

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EmailView(viewsets.ModelViewSet):
    queryset = Email.objects.all()
    serializer_class = EmailSerializer

# class ChatmessageView(viewsets.ModelViewSet):
#     queryset = Chatmessage.objects.all()
#     serializer_class = ChatmessageSerializer