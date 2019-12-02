from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255, default='n/a')
    username = models.CharField(max_length=255, default='n/a')
    password = models.CharField(max_length=255, default='n/a')
    
    def __str__(self):
        return self.name

class Email(models.Model):
    sender = models.CharField(max_length=255)
    receiver = models.TextField(blank=True)
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)

    def __str__(self):
        return self.title

class Chatmessage(models.Model):
    sender = models.CharField(max_length=255)
    receiver = models.TextField(blank=True)
    content = models.TextField(blank=True)

    def __str__(self):
        return self.content
