from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirmPassword = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'confirmPassword', 'pharmacyName', 'registrationNumber', 'address', 'registrationCertificate','terms']

    def validate(self, attrs):
        if attrs['password'] != attrs['confirmPassword']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        
        # Ensure terms is checked
        if not attrs.get('terms', False):
            raise serializers.ValidationError({"terms": "You must agree to the terms and conditions."})
        return attrs


    def create(self, validated_data):
        #  Remove confirmPassword field from validated data
        validated_data.pop('confirmPassword', None)

        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email'],
            pharmacyName=validated_data['pharmacyName'],
            registrationNumber=validated_data['registrationNumber'],
            address=validated_data['address'],
            registrationCertificate=validated_data.get('registrationCertificate'),
            terms=validated_data['terms'],
        )
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user



CustomUser = get_user_model()



class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True, required=True)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        # Authenticate user
        user = authenticate(username=username, password=password)
         # Log the result of authenticate
        print(f"User: {user}, Username: {username}, Password: {password}")

        if user is None:
            raise ValidationError("Invalid credentials")

        # Get the request object from the context (important for session-based authentication)
        request = self.context.get('request')
        
        if request:
            # Log the user in and start a session
            login(request, user)

        # Add the user to validated_data for use in the view
        attrs['user'] = user
        return attrs

