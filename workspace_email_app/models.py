from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255, default='n/a')
    username = models.CharField(max_length=255, default='n/a')
    password = models.CharField(max_length=255, default='n/a')
    
    def __str__(self):
        return self.name

class Email(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='emailFrom')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='emailTo')
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)

    def __str__(self):
        return self.title

class Chatmessage(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='chatFrom')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='chatTo')
    content = models.TextField(blank=True)

    def __str__(self):
        return self.content
