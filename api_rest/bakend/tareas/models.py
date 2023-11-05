from django.db import models

# Create your models here.

class Tares(models.Model):
    name = models.CharField(max_length=100)
    task = models.EmailField()
    title = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)



class Todo(models.Model):
    title=models.CharField(max_length=150)
    description=models.CharField(max_length=500)
    completed=models.BooleanField(default=False)
 
    # string representation of the class
    def __str__(self):
 
        #it will return the title
        return self.title