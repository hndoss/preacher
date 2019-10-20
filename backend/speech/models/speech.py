from django.db import models
from member.models import Member


class Speech(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30)
    preacher = models.ForeignKey(Member, on_delete=models.CASCADE)
    date = models.DateField()

    def __str__(self):
        return self.title