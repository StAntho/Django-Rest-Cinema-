from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('home/', views.getHome),

    path('film/', views.getFilms),
    path('film/<int:id>/', views.getFilm),
    path('film/add', views.addFilm),
    path('film/delete/<int:id>/', views.deleteFilm),
    path('film/update/<int:id>/', views.updateFilm),

    path('special/', views.getSpecials),
    # path('special/<int:id>/', views.getSpecial),
    path('special/<int:id>/', DetailSpecial.as_view()),
    path('special/add', views.addSpecial),
    path('special/delete/<int:id>/', views.deleteSpecial),
    path('special/update/<int:id>/', views.updateSpecial),

    path('inscription/', RegisterUser.as_view()),
    path('login/', LoginUser.as_view()),
    path('deconnexion/', LogoutUser.as_view()),
    path('profil/', ProfilUser.as_view()),
    # path('reservation/seance/<int:id>/', BookSeance.as_view()),
    path('reservation/seance/<int:id>/', views.bookSeance),
]