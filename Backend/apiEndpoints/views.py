from django.contrib.auth.models import User
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
 

# User Registration View
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = Token.objects.create(user=user)
        return Response({
            "user": serializer.data,
            "token": token.key
        }, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "token": token.key,
            "user": {
                'id':user.id,
                "username": user.username,
                "name": user.name,
                "email": user.email,
                'password':user.password
            }
        }, status=status.HTTP_200_OK)

# View to get all users
class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# View to get a single user by UUID
class UserDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'
    permission_classes = [AllowAny]

class UserUpdateEmailView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserUpdateEmailSerializer
    lookup_field = 'id'
    permission_classes = [AllowAny]
    # permission_classes = [permissions.IsAuthenticated]

class UserUpdatePasswordView(generics.UpdateAPIView):
    serializer_class = UpdatePasswordSerializer
    permission_classes = [AllowAny]
    # permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user
    
# View to delete a user by UUID
class UserDeleteView(generics.DestroyAPIView):
    queryset = User.objects.all()
    lookup_field = 'id'
    permission_classes = [AllowAny]
    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Optionally, restrict deletion to the authenticated user
        return User.objects.filter(id=self.request.user.id)


# Plan Views
class PlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer
    # permission_classes = [IsAuthenticated]

# UserPlan Views
class UserPlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserPlan.objects.all()
    serializer_class = UserPlanSerializer
    permission_classes = [IsAuthenticated]


