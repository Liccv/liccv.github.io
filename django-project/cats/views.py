from django.http import HttpResponse
from django.template import loader
from .models import Cat


def cats(request):
  cats = Cat.objects.all().values()
  template = loader.get_template('index.html')
  context = {
    'cats' : cats,
  }
  return HttpResponse(template.render(context, request))

