from django.db import models
from accounts.models import User



class ActivityEvent(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    action = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)