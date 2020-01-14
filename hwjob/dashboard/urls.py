from django.urls import path

from dashboard.views import search_client_view, client_view, root_view

app_name = "dashboard"
urlpatterns = [
    path("", root_view, name="root_view"),
    path("api/search-clients", search_client_view, name="search_client"),
    path("api/client/<int:client_id>", client_view, name="client_view"),
]
