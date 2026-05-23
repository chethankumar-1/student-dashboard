from django.urls import path
from .views import DashboardAPIView, LessonListAPIView

urlpatterns = [

    path('dashboard/', DashboardAPIView.as_view()),

    path('lessons/', LessonListAPIView.as_view()),
]