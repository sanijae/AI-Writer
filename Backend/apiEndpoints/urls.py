from django.urls import path
from .views import *

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('users/', UserListView.as_view(), name='user-list'), 
    path('user/<uuid:id>/', UserDetailView.as_view(), name='user-detail'),
    path('user/update-email/<uuid:id>/', UserUpdateEmailView.as_view(), name='user-update-email'),
    path('user/update-password/<uuid:id>/', UserUpdatePasswordView.as_view(), name='user-update-password'),
    path('user/delete/<uuid:id>/', UserDeleteView.as_view(), name='user-delete'),
    path('plans/', PlanDetailView.as_view(), name='plans'),
    path('user-plans/<uuid:pk>/', UserPlanDetailView.as_view(), name='user-plan-detail'),
]
 