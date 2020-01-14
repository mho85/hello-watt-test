# Challenge Hello Watt

Vous cherchez un job/stage ? Découvrez [nos offres d'emplois](https://hello-watt.welcomekit.co/).

## Votre mission

Votre objectif est de mettre en place un dashboard simplifié de diagnostic en un clic.
Le projet possède déjà une base de données contenant les informations de consommation d'électricité de 5000 clients depuis 2015.

Ce qui existe déjà :

- Une API (à compléter)
    - GET `/api/search-clients` Permet de rechercher un client
        
        Paramètres :
        
        - `query` La recherche à effectuer (cherche l'ID ou le nom du client)
        - `page` Le numéro de page pour la pagination
        
        Réponse :
        ```json
        {
          "clients": [
            {
              "id": 1,
              "full_name": "Katie Larson"
            },
            {
              "id": 2,
              "full_name": "Jennifer Boyer"
            },
            {
              "id": 3,
              "full_name": "Emily Proctor"
            },
            {
              "id": 4,
              "full_name": "Jeffrey Blair"
            },
            {
              "id": 5,
              "full_name": "Kevin Schneider"
            },
            {
              "id": 6,
              "full_name": "Elizabeth Trujillo"
            },
            {
              "id": 7,
              "full_name": "Jaclyn Cruz"
            },
            {
              "id": 8,
              "full_name": "Sergio Davis"
            },
            {
              "id": 9,
              "full_name": "David Cole"
            },
            {
              "id": 10,
              "full_name": "Kimberly Thomas"
            }
          ],
          "page": 1,
          "page_count": 500
        }
        
    - POST `/api/client/<client_id>` Permet de mettre à jour le nom d'un client
    
        Réponse :
        
        ```json
        {
          "result": "ok"
        }

- Une page root vide: `http://127.0.0.1:8000`

Vous devez au minimum :

- Faire un système pour recherche un client (à l'aide de l'API déjà en place)
- Afficher la courbe de consommation de l'année passée (Bonus: afficher les courbes d'autres années), il vous faudra faire un peu de back pour y arriver
- Afficher les détails d'un client (id, nom, possède un chauffage électrique, a des disfonctionnements sur son installation)

Django dispose d'un interface d'administration, consulter la documentation pour y accéder

Une partie de nos utilisateurs est sur mobile.

La base de donnée de production contiendra des centaines de milliers de clients.

Vous êtes libre de changer complétement l'application. Impressionez-nous !

## Mise en place

- Cloner ce dépo (ne pas en faire un fork)
- Installer les dépendances se trouvant dans requirements.txt
- Démarrer le serveur: `python manage.py runserver`


Le projet contient déjà les modèles de la base de données et quelques tests.
Vous trouverez dans l'app dashboard un dossier fixtures et metadata. Les fixtures sont déjà chargées en base de données, vous n'aurez donc probablement pas besoin d'y toucher.
Le dossier metadata contient des informations additionnelles sur les clients, il est là uniquement pour que vous puissiez tester vos résultats avec la "réalité".

## Librairies à votre disposition

Seul Django et Black (outil de formatage du code) sont listés en dépendances Python.
En front eva-icons est installée (https://github.com/akveo/eva-icons#how-to-use).

Vous êtes libre d'installer d'autres dépendances si besoin, que ce soit des dépendances Python (drf, ...), javascript (React, Vue, ...), css (bootstrap, tailwind, ...).

## Une fois terminé

Une fois que vous avez terminé, merci de contacter votre correspondant chez Hello Watt.

Envoyez vos résultats :
- Sous la forme d'un lien Github (ou Gitlab, ou autre) vers votre projet. **Attention, votre projet doit être privé**, partagez-le uniquement avec votre correspondant Hello Watt.
- Par email avec le zip du projet (Cela ne vous exempt pas de commit vos changements réguliérement. N'oubliez pas le dossier .git dans le zip).
