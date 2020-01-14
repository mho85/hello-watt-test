from django.core.paginator import Paginator, InvalidPage, EmptyPage
from django.db.models import Q
from django.http import (
    HttpResponseBadRequest,
    HttpResponseNotFound,
    JsonResponse,
    HttpResponseNotAllowed,
)
from django.shortcuts import render

from dashboard.models import Client


def root_view(request):
    """
    This is the root view, you can use it or delete it as needed
    """
    return render(request, "dashboard/index.html")


def search_client_view(request):
    """
    This view search a client and return a list of clients matching requests
    """
    if request.method == "GET":
        query = request.GET.get("query")
        if not query:
            client_q = Client.objects.filter()
        else:
            client_q = Client.objects.filter(
                Q(Q(id__icontains=query) | Q(full_name__icontains=query))
            )
        client_q = client_q.annotate_anomaly().annotate_has_elec_heating()
        paginator = Paginator(client_q, 10)

        page = int(request.GET.get("page", 1))

        try:
            clients = paginator.page(page)
            client_list = [{"id": c.id, "full_name": c.full_name, "has_elec_heating": c.has_elec_heating, "has_anomaly": c.has_anomaly} for c in clients]
            return JsonResponse(
                {
                    "clients": client_list,
                    "page": page,
                    "page_count": paginator.num_pages,
                },
                safe=True,
            )

        except (InvalidPage, EmptyPage):
            return HttpResponseBadRequest("Parameter page is invalid.")

    return HttpResponseNotAllowed(["GET"])


def client_view(request, client_id):
    """
    This view handle:
    - The POST request to change the client full_name
    - The get request to get the client details (TODO)
    :param request:
    :param client_id: The Client ID
    :return:
    """
    if request.method == "POST":
        full_name = request.POST.get("full_name")
        if not full_name:
            return HttpResponseBadRequest("No parameter full_name provided.")

        client = Client.objects.filter(id=client_id).first()
        if not client:
            return HttpResponseNotFound("Client not found.")

        client.full_name = full_name
        client.save()
        return JsonResponse({"result": "ok"})

    if request.method == "GET":
        # TODO get client details
        return JsonResponse({})

    return HttpResponseNotAllowed(["GET", "POST"])
