from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model

class EmailOrUsernameBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        User = get_user_model()
        
        # Try to find the user by username or email
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            try:
                user = User.objects.get(email=username)
            except User.DoesNotExist:
                return None
        
        if user and user.check_password(password):
            return user
        return None

