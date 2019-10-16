from rest_framework import viewsets, permissions
from ..serializers import MemberSerializer
from ..models import Member

class MemberView(viewsets.ModelViewSet): 
    serializer_class = MemberSerializer
    queryset = Member.objects.all()