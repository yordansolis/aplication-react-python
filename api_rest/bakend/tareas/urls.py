from django.urls import path
from django.contrib import admin

from . import views

urlpatterns = [
        path('admin/', admin.site.urls),
        path('api/tareas/', views.listaTareas ),
        path('agregar-tarea', views.addTask ),
        path('delete-task/<int:id>', views.deleteTask),
        path('update-task/<int:id>', views.updateTask),
]