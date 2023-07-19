from django.urls import path
from . import views

urlpatterns = [
    path('film/', views.getFilms),
    path('film/<int:id>/', views.getFilm),
    path('film/add', views.addFilm),
    path('film/delete/<int:id>/', views.deleteFilm),
    path('film/update/<int:id>/', views.updateFilm),

    path('special/', views.getSpecials),
    path('special/<int:id>/', views.getSpecial),
    path('special/add', views.addSpecial),
    path('special/delete/<int:id>/', views.deleteSpecial),
    path('special/update/<int:id>/', views.updateSpecial),
]