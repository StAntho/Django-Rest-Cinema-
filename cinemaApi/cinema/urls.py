from django.urls import path
from . import views
from .views import *

urlpatterns = [
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
    path('connexion/', LoginUser.as_view()),
    path('deconnexion/', LogoutUser.as_view()),
    path('profil/', ProfilUser.as_view()),
    path('reservation/<int:id>/special/<int:id>/seance/<int:id>/place/<int:nb>', BookSeance.as_view()),
]