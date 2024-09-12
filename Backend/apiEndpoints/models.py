from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


# Custom User model
class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    name = models.TextField(blank=True, null=True)
    
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        blank=True,
        help_text=('The groups this user belongs to. A user will get all permissions '
                   'granted to each of their groups.'),
        verbose_name=('groups'),
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions_set',
        blank=True,
        help_text=('Specific permissions for this user.'),
        verbose_name=('user permissions'),
    )

# Plan model
class Plan(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration_days = models.PositiveIntegerField()  # Duration in days
    features = models.TextField(blank=True, null=True)  # Comma-separated list of features

    def __str__(self):
        return self.name


# Linking User to Plan
class UserPlan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField()

    def __str__(self):
        return f"{self.user.email} - {self.plan.name}"
    
class ContentUpload(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    userPlan = models.ForeignKey(UserPlan, on_delete=models.CASCADE)
    uploadedAt = models.DateTimeField(auto_created=True)
    tool = models.TextField(blank=False,null=False)
    content = models.TextField(blank=False,null=False)
    modifiedContent = models.TextField(blank=False,null=False)

    def __str__(self) -> str:
        return super().__str__()