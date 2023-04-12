from django.shortcuts import render

# Create your views here.

def index(request):
    """View function for home page of site."""

    return render(request, 'index.html')

def donation_options(request):
    """View function for donation options page of site."""

    return render(request, 'donation-options/index.html')