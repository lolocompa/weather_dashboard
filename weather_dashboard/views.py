from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.http import JsonResponse
from django.shortcuts import render
from django.urls import reverse
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request):
    if request.method == "GET":
        return render(request, "weather_dashboard/index.html")