from django.contrib import admin
from django.contrib import admin
from .models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'platform', 'price', 'stock', 'created_at')
    list_filter = ('platform',)
    search_fields = ('title',)
    list_display_links = ('title', 'platform')
