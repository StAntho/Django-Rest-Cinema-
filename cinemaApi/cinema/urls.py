from django.urls import path
from . import views

urlpatterns = [
    path('', views.getFilms),
    path('<int:id>/', views.getFilm),
    # path('add/', views.),
    # path('delete/<int:id>/', views.),
    # path('update/<int:id>/', views.),
]