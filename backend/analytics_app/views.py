from django.db.models.functions import TruncDate
from django.db.models import Count

from rest_framework.views import APIView
from rest_framework.response import Response

from .models import ActivityEvent


import csv
from django.http import HttpResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from courses.models import StudentProgress

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def export_student_progress_csv(request):

    user = request.user

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="student_progress.csv"'

    writer = csv.writer(response)

    writer.writerow([
        'Student',
        'Course',
        'Lesson',
        'Completed',
        'Time Spent',
        'Lesson Duration'
    ])

    progress = StudentProgress.objects.filter(student=user)

    for p in progress:
        writer.writerow([
            user.email,
            p.lesson.course.title,
            p.lesson.title,
            p.completed,
            p.time_spent,
            p.lesson.duration
        ])

    return response

class ActivityAPIView(APIView):

    def get(self, request):

        activities = ActivityEvent.objects.all().values()

        return Response(activities)


class TimeSeriesAPIView(APIView):

    def get(self, request):

        data = ActivityEvent.objects.annotate(
            date=TruncDate('created_at')
        ).values('date').annotate(
            total=Count('id')
        )

        return Response(data)