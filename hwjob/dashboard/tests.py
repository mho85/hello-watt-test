from django.test import TestCase, Client as DjClient
from django.urls import reverse


class DashBoardTestCase(TestCase):
    fixtures = ["prices", "clients", "consumptions"]


class HttpCodeTestCase(DashBoardTestCase):
    def setUp(self):
        self.djclient = DjClient()

    def assertSuccess(self, response, msg_prefix):
        status_code = response.status_code
        failure_msg = (
            msg_prefix and msg_prefix + " " or ""
        ) + f"expected success status code (200-299)"
        self.assertGreaterEqual(status_code, 200, failure_msg)
        self.assertLess(status_code, 300, failure_msg)

    def assertGet(self, path):
        response = self.djclient.get(path)
        self.assertSuccess(response, f"{path}")

    def assert404(self, path):
        response = self.djclient.get(path)
        self.assertEqual(response.status_code, 404)

    def test_client_search_valid(self):
        query = "1"
        path = f"{reverse('dashboard:search_client')}?query={query}"
        response = self.djclient.get(path)
        self.assertSuccess(response, path)

    def test_client_search_with_page_valid(self):
        query = "1"
        page = "2"
        path = f"{reverse('dashboard:search_client')}?query={query}&page={page}"
        response = self.djclient.get(path)
        self.assertSuccess(response, path)

    def test_client_search_with_page_invalid(self):
        query = "1"
        page = "8000"  # Only 5000 clients in our test DB
        path = f"{reverse('dashboard:search_client')}?query={query}&page={page}"
        response = self.djclient.get(path)
        self.assertEqual(response.status_code, 400)
