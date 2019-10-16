from django.db import models
from member.models import Member

# Create your models here.
class Speech(models.Model):
    id = models.AutoField(primary_key = True)
    tittle = models.CharField(max_length = 30)
    preacher = models.ForeignKey(Member,on_delete = models.CASCADE)
    date = models.DateField()