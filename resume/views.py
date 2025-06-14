from django.shortcuts import render
from rest_framework import permissions, views
from django.template import loader
from django.http import HttpResponse

class IndexViewSet(views.APIView):
    def get(self, request):
        template = loader.get_template('index.html')
        return HttpResponse(template.render())