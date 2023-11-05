from .models import Tares,  Todo
from django.http import JsonResponse
from rest_framework.response import Response
from .serializers import TareasSerializer, TodoSerializer
from rest_framework.decorators import api_view
from rest_framework import status


@api_view(['GET'])
def listaTareas(request):
    queryset = Todo.objects.all()  # Obtén todas
    serializer = TareasSerializer(queryset, many=True)  # Serializa los datos
    return JsonResponse({"datos": serializer.data}, status=status.HTTP_200_OK)




@api_view(['POST'])
def addTask(request):

    if request.method == 'POST':
        queryset = Todo.objects.all()
        numero_de_registros = queryset.count()

        id = numero_de_registros + 1
        title = request.data['title']
        description = request.data['description']
        completed = request.data['completed']

        serializer = TodoSerializer(data={
            'id': id,
            'title': title.title(),
            'description': description,
            'completed': completed
        })

        if serializer.is_valid():
            serializer.save()
        else:
            print('error al serializar')

        return JsonResponse({'Agregando daatos....': 'ok'})


@api_view(['DELETE'])
def deleteTask(request, id):
    try:
        delete_id = Todo.objects.get(id=id)
        if delete_id:
            delete_id.delete()

        return JsonResponse({'success': 'delete'}, status=status.HTTP_200_OK)

    except Todo.DoesNotExist:
        return Response({'err': 'Tasks not found'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['PUT'])
def updateTask(request, id):

         if request.method == 'PUT':
        
              try:
                    id_task = Todo.objects.get(id=id)
                    id_task.completed = request.data
                    id_task.save()
                    print(id_task)

                    return JsonResponse({"status": "success"}, status=status.HTTP_200_OK)
              
              except Todo.DoesNotExist:
                    
                    return Response({"error": "Tarea no encontrado"}, status=status.HTTP_404_NOT_FOUND)



"""
Many permite realizar todos los datos si es un dicionario pero se tiene que poner en true. 
El parámetro many se utiliza para indicar si estás serializando una lista de objetos (cuando es True) o un solo objeto (cuando es False o se omite).

"""