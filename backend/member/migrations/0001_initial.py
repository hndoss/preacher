# Generated by Django 2.2.6 on 2019-10-20 03:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('phone_number', models.CharField(max_length=30)),
                ('sex', models.CharField(choices=[('M', 'M'), ('F', 'F')], default='M', max_length=30)),
            ],
        ),
    ]
