from accounts.models import User
from courses.models import Course, Lesson, StudentProgress
from analytics_app.models import ActivityEvent

student1 = User.objects.create_user(
    username='student1',
    password='student123',
    role='student'
)

mentor1 = User.objects.create_user(
    username='mentor1',
    password='mentor123',
    role='mentor'
)

python_course = Course.objects.create(
    title='Python Full Stack',
    description='Django React'
)

lesson1 = Lesson.objects.create(
    course=python_course,
    title='Django Basics',
    duration=60
)

lesson2 = Lesson.objects.create(
    course=python_course,
    title='React Basics',
    duration=45
)

StudentProgress.objects.create(
    student=student1,
    lesson=lesson1,
    completed=True,
    time_spent=50
)

StudentProgress.objects.create(
    student=student1,
    lesson=lesson2,
    completed=False,
    time_spent=20
)

ActivityEvent.objects.create(
    user=student1,
    action='Completed Django Basics'
)

print('Seed Data Inserted Successfully')