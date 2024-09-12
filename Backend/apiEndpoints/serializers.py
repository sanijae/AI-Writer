from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.core.validators import EmailValidator
from .models import User, Plan, UserPlan
from django.contrib.auth import authenticate



# Registration Serializer
class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=False)
    name = serializers.CharField(required=True)
    email = serializers.EmailField(required=True, validators=[EmailValidator(message="Enter a valid email address.")])
    password = serializers.CharField(write_only=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ['name', 'email', 'password', 'username']
    
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        username = validated_data.get('username') or validated_data['email'].split('@')[0]
        user = User.objects.create_user(
            name=validated_data['name'],
            email=validated_data['email'],
            password=validated_data['password'],
            username=username
        )
        return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid login credentials")
        user = authenticate(username=user.username, password=password)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid login credentials")

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class UserUpdateEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email'] 

    def validate_email(self, value):
        if User.objects.filter(email=value).exclude(pk=self.instance.pk).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value
    

class UpdatePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True, write_only=True)
    new_password = serializers.CharField(required=True, write_only=True)
    confirm_new_password = serializers.CharField(required=True, write_only=True)

    def validate(self, data):
        old_password = data.get('old_password')
        new_password = data.get('new_password')
        confirm_new_password = data.get('confirm_new_password')

        # Ensure new passwords match
        if new_password != confirm_new_password:
            raise serializers.ValidationError("New passwords must match.")

        # Authenticate the user with the old password
        user = self.context['request'].user
        if not user.check_password(old_password):
            raise serializers.ValidationError("Old password is incorrect.")

        # Validate new password (use Django's built-in validators)
        validate_password(new_password, user)
        
        return data

    def save(self):
        user = self.context['request'].user
        new_password = self.validated_data['new_password']
        user.password(new_password)
        user.save()
        return user


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = "__all__"


class UserPlanSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    plan = PlanSerializer(read_only=True)

    class Meta:
        model = UserPlan
        fields = "__all__"
