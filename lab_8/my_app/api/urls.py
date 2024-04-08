from django.urls import path 
from . import views 
from django.contrib import admin 
 
urlpatterns = [ 
    path('products/', views.product_list, name='product_list'), 
    path('products/<int:id>/', views.product_detail, name='product_detail'), 
    path('categories/', views.category_list, name='category_list'), 
    path('categories/<int:id>/', views.category_detail, name='category_detail'), 
    path('categories/<int:id>/products/', views.products_by_category, name='products_by_category'), 
]