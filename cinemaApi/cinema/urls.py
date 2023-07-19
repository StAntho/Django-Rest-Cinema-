from django.urls import path
from . import views

urlpatterns = [
    path('', views.getFilms),
    path('<int:id>/', views.getFilm),
    path('special/', views.getSpecials),
    path('special/<int:id>/', views.getSpecial),
    path('special/add', views.addSpecial),
    path('special/delete/<int:id>/', views.deleteSpecial),
    path('special/update/<int:id>/', views.updateSpecial),
]