from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from auto.views import AutoViewSet
from clients.views import ClientViewSet, ClientCurrent
from orders.views import OrderViewSet
from service_orders.views import ServiceOrderViewSet
from app import settings
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register(r'autos', AutoViewSet)
router.register(r'clients', ClientViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'service_orders', ServiceOrderViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/clients/current', ClientCurrent.as_view(), name='client_current'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns += static(settings.STATIC_URL) + \
static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
