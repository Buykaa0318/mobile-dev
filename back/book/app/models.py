from django.db import models


class Book(models.Model):

    title = models.CharField(
        max_length=255
    )

    author = models.CharField(
        max_length=255
    )

    image = models.TextField()

    description = models.TextField()

    category = models.CharField(
        max_length=100
    )

    current_page = models.IntegerField(
        default=0
    )

    total_pages = models.IntegerField()

    completed = models.BooleanField(
        default=False
    )

    def __str__(self):
        return self.title