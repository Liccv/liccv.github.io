from django.http import HttpResponse
from django.template import loader
from .models import Cat, WebsiteContent
from django.shortcuts import render


def cats(request):
  cats = Cat.objects.all().values()
  content = WebsiteContent.objects.all().filter(language__language='pl')[0]
  template = loader.get_template('index.html')
  context = {
    'cats' : cats,
    'content': content,
  }
  return HttpResponse(template.render(context, request))
