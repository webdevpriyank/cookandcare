from django.shortcuts import render

# Create your views here.
def homepage(request):
    context = {}
    return render(request, 'website/homepage.html', context=context)


def about(request):
    context = {}
    return render(request, 'website/about-us.html', context=context)


def contact(request):   
    context = {}
    return render(request, 'website/contact-us.html', context=context)
