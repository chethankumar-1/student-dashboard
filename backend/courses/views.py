from django.db.models import Sum, Count

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView

from .models import StudentProgress, Lesson
from .serializers import LessonSerializer


class DashboardAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        completed_lessons = StudentProgress.objects.filter(
            completed=True
        ).count()

        total_time = StudentProgress.objects.aggregate(
            Sum('time_spent')
        )

        progress_data = StudentProgress.objects.values(
            'lesson__course__title'
        ).annotate(
            total=Count('id')
        )

        recommendation = (
            'Continue React Basics'
            if completed_lessons < 3
            else 'Start Advanced Django'
        )

        return Response({
            'completed_lessons': completed_lessons,
            'time_spent': total_time,
            'course_progress': progress_data,
            'recommendation': recommendation
        })


class LessonListAPIView(ListAPIView):

    queryset = Lesson.objects.all()

    serializer_class = LessonSerializer