from django.db import models
from accounts.models import User

class Course(models.Model):

    title = models.CharField(max_length=255)

    description = models.TextField()

    def __str__(self):
        return self.title


class Lesson(models.Model):

    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE
    )

    title = models.CharField(max_length=255)

    duration = models.IntegerField()

    def __str__(self):
        return self.title


class StudentProgress(models.Model):

    student = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE
    )

    completed = models.BooleanField(default=False)

    time_spent = models.IntegerField(default=0)