from django.db import model

# Create your models here.

class Member(models.Model):

    Male = 'M'
    Female = 'F'
    name = models.CharField(max_length = 30)
    last_name = models.CharField(max_length = 30)
    phone_number = models.CharField(max_length = 30)
    sex_choices = [
        (Male,Male),
        (Female,Female),
    ]
    sex = models.CharField(max_length = 30, choices = sex_choices,default= Male,)

    
    