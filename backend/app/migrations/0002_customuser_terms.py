# Generated by Django 5.1.1 on 2024-09-18 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="terms",
            field=models.BooleanField(default=False),
        ),
    ]