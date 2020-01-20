from rest_framework import serializers

from .models import User, Email

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'username', 'password', 'contacts')

class EmailSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Email
        fields = ('id', 'title', 'content', 'sender', 'receiver', 'status')

# class ChatmessageSerializer(serializers.ModelSerializer):
#     class Meta: 
#         model = Chatmessage
#         fields = ('id', 'content', 'sender', 'receiver')

