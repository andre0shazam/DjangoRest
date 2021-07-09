"""teste URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from api.models import Client
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
"""
    @api {GET} api/client/ Solicitar informações do usuário
    @apiName GetCliente
    @apiGroup client
   
"""
"""
    @api {POST} api/client/ Mostrar usuário
    @apiName Postcliente
    @apiGroup client
    @apiParam {String} nome       Nome do cliente
    @apiParam {String} sobrenome      Sobrenome do cliente
    @apiParam {Number} idade        Idade do cliente
    @apiParam {String} sexo         Sexo do cliente
"""
"""
    @api {DELETE} api/client/:id Deletar usuário 
    @apiName GetCliente
    @apiGroup client
    @apiExample {curl} Exemplo para localizar pelo Id para Deletar:
    curl -X DELETE http://localhost:8080/api/client/1
"""

"""
    @api {PUT} api/client/:id Alterar usuário
    @apiName Getcliente
    @apiGroup client
    @apiParam {String} nome       Nome do cliente
    @apiParam {String} sobrenome      Sobrenome do cliente
    @apiParam {Number} idade        Idade do cliente
    @apiParam {String} sexo         Sexo do cliente
    @apiExample {curl} Exemplo para localizar pelo Id para Alterar:
    curl -X PUT http://localhost:8080/api/client/1
"""


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ['nome', 'sobrenome', 'idade', 'sexo']

class UserViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = UserSerializer

router = routers.DefaultRouter()
router.register(r'client', UserViewSet)


urlpatterns = [
    path('api/', include(router.urls),),
]
