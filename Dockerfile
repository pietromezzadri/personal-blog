FROM python:3.12-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Install system dependencies if required by Python packages (e.g., for Pillow)
# RUN apt-get update && apt-get install -y --no-install-recommends \
#     libjpeg-dev zlib1g-dev \
#     && rm -rf /var/lib/apt/lists/*

# Copy requirements.txt and install Python dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire Django project
COPY . /app/

# Expose the port your Django application will run on
EXPOSE 8000

CMD ["python", "manage.py", "collecstatic"]

# Command to run the Django development server (for development)
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# For production, you would typically use a WSGI server like Gunicorn:
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "personal_blog.wsgi:application"]