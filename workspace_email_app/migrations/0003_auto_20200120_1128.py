# Generated by Django 2.2.7 on 2020-01-20 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workspace_email_app', '0002_auto_20191202_0035'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Chatmessage',
        ),
        migrations.AddField(
            model_name='email',
            name='status',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='contacts',
            field=models.TextField(blank=True),
        ),
    ]
