from django.urls import path

from .views import (
    ActivityAPIView,
    TimeSeriesAPIView,
    export_student_progress_csv
)

urlpatterns = [

    path('activity/', ActivityAPIView.as_view()),

    path('timeseries/', TimeSeriesAPIView.as_view()),

     path('export/csv/', export_student_progress_csv),
]