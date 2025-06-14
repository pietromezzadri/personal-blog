from django.urls import path
from .views import IndexViewSet

urlpatterns = [
    path('', IndexViewSet.as_view(), name="index_view")
]
