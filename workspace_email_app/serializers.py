from rest_framework import serializers

from .models import User, Email, Chatmessage

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'username', 'password')

class EmailSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Email
        fields = ('id', 'title', 'content', 'sender', 'receiver')

class ChatmessageSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Chatmessage
        fields = ('id', 'content', 'sender', 'receiver')

