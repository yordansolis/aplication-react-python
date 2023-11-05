from rest_framework import serializers
from .models import Tares,Todo

class TareasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'  # Esto incluirá automáticamente todos los campos del modelo, incluyendo 'id'
