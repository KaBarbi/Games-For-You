from django.db import models


class Product(models.Model):
    PLATFORM_CHOICES = [
        ('PS', 'PlayStation'),
        ('XB', 'Xbox'),
        ('SW', 'Nintendo Switch'),
    ]

    title = models.CharField(max_length=150)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    platform = models.CharField(max_length=2, choices=PLATFORM_CHOICES)
    stock = models.PositiveIntegerField()
    image = models.ImageField(upload_to='products/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.get_platform_display()})"
