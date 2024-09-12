from django.core.exceptions import ValidationError
import re

def validate_password(password):
    if len(password) < 8:
        raise ValidationError("Password must be at least 8 characters long.")
    if not re.search(r'[A-Z]', password):
        raise ValidationError("Password must contain at least one uppercase letter.")
    if not re.search(r'[a-z]', password):
        raise ValidationError("Password must contain at least one lowercase letter.")
    if not re.search(r'[0-9]', password):
        raise ValidationError("Password must contain at least one digit.")
    if not re.search(r'[\W_]', password):
        raise ValidationError("Password must contain at least one special character.")
    if re.search(r'\s', password):
        raise ValidationError("Password cannot contain any spaces.")
