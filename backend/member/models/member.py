from django.db import models


class Member(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=30)

    Male = 'M'
    Female = 'F'
    sex_choices = [
        (Male, Male),
        (Female, Female),
    ]
    sex = models.CharField(max_length=30, choices=sex_choices, default=Male,)

    def __str__(self):
        return self.first_name + " " + self.last_name


