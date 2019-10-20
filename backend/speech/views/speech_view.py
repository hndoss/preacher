from rest_framework import viewsets, permissions
from ..serializers import SpeechSerializer
from ..models import Speech


class SpeechView(viewsets.ModelViewSet):
    serializer_class = SpeechSerializer
    queryset = Speech.objects.all()
