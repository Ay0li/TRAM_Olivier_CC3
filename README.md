# TRAM_Olivier_CC3
<strong>Question 1.1 : donner la liste des en-têtes de la réponse HTTP du serveur.</strong>

  En-tête de la réponse : 

        HTTP/1.1 200 OK
        Date: Thu, 21 Sep 2023 04:51:53 GMT 
        Connection: keep-alive 
        Keep-Alive: timeout=5
        Transfer-Encoding: chunked


<strong>Question 1.2 : donner la liste des en-têtes qui ont changé depuis la version précédente.</strong>

  En-tête de la réponse : 

        HTTP/1.1 200 OK
        Content-Type: application/json
        Date: Thu, 21 Sep 2023 04:58:34 GMT
        Connection: keep-alive 
        Keep-Alive: timeout=5
        Content-Length: 20

  Après avoir changé de fonction, nous n'avons plus l'en-tête 'Transfer-Encoding', mais plutôt l'en-tête 'Content-Length'.


<strong>Question 1.3 : que contient la réponse reçue par le client ?</strong>

  on suppose qu'il y a un fichier "index.html" alors on obtient ceci : 

      État 200 OK
      Version HTTP/1.1
      Transfert 161 o (taille 5 o)
      Priorité de la requête Highest
      Résolution DNS Système

  Le serveur HTTP renvoie le contenu du fichier "index.html" au client lorsque la requête est réussie (statut 200 OK). Par conséquent, la réponse reçue par le client contiendra le contenu du fichier "index.html" en tant que corps de la réponse. Le type de contenu de la réponse est défini comme "text/html" dans l'en-tête de la réponse. Donc, la réponse reçue par le client contiendra le contenu HTML du fichier "index.html".


<strong>Question 1.4 : quelle est l'erreur affichée dans la console ?</strong>

  [Error: ENOENT: no such file or directory, open 'index.html'] {
      errno: -2,
      code: 'ENOENT',
      syscall: 'open',
      path: 'index.html'}

  L'erreur "ENOENT (No such file or directory)" est couramment générée par les opérations du système de fichiers (fs) pour indiquer qu'un composant du chemin d'accès spécifié n'existe pas. Aucune entité (fichier ou répertoire) correspondante n'a pu être trouvée en utilisant le chemin d'accès fourni.


<strong>Question 1.5 donner le code de requestListener() modifié avec gestion d'erreur en async/await.</strong>
  
    async function requestListener(_request, response) {
    
      try {

        // Lecture du contenu du fichier "index.html" de manière asynchrone
        const contents = await fs.readFile("index.html", "utf8");

        // Configuration de l'en-tête de la réponse pour indiquer que le contenu est HTML
        response.setHeader("Content-Type", "text/html");
        
        // Envoi du statut 200 (OK) et du contenu du fichier en tant que réponse
        response.writeHead(200);
        response.end(contents);
      } catch (error) {
        // En cas d'erreur lors de la lecture du fichier
        console.error(error);

        // Configuration de l'en-tête de la réponse avec un statut 500 (Erreur interne du serveur)
        response.writeHead(500);

        // Envoi d'un message d'erreur personnalisé en tant que réponse
        response.end("Erreur interne du serveur (500) : Le fichier index.html est introuvable.");
      }
    }
  
<strong>Question 1.6 indiquer ce que cette commande a modifié dans votre projet.</strong>

  Cette commande a ajouté deux dépendances dans le fichier package.json, à la fois dans "dependencies" et "devDependencies", qui sont nécessaires pour exécuter le projet et le développer.

  Nous avons ajouté les dépendances suivantes :

    "cross-env": "^7.0.3" : Il s'agit du package nécessaire pour exécuter le projet et il est en version "7.0.3".

    "nodemon": "^3.0.1" : Il s'agit du package nécessaire pour le développement du projet et il est en version "3.0.1".


<strong>Question 1.7 quelles sont les différences entre les scripts http-dev et http-prod ?</strong>

  execution de npm run http-dev :

    oliviertram@MacBook-Air-de-Olivier devweb-tp5 % npm run http-dev

    > devweb-tp5@1.0.0 http-dev
    > cross-env NODE_ENV=development nodemon server-http.mjs

    [nodemon] 3.0.1
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,cjs,json
    [nodemon] starting `node server-http.mjs`
    Le serveur fonctionne sur http://localhost:8000
    [nodemon] restarting due to changes...
    [nodemon] starting `node server-http.mjs`
    NODE_ENV = development
    Le serveur fonctionne sur http://localhost:8000

  execution de npm run http-prod : 

    oliviertram@MacBook-Air-de-Olivier devweb-tp5 % npm run http-prod

    > devweb-tp5@1.0.0 http-prod
    > cross-env NODE_ENV=production node server-http.mjs

    Le serveur fonctionne sur http://localhost:8000

  Nous remarquons que, en mode développement (http-dev), après avoir sauvegardé les modifications de "server-http.mjs", le serveur se redémarre automatiquement, et il n'est accessible que par le développeur.

  En revanche, en mode production (http-prod), il n'y a eu aucun redémarrage automatique. Si cela se produisait, les utilisateurs du site seraient déconnectés.


<strong>Question 1.8 donner les codes HTTP reçus par votre navigateur pour chacune des quatre pages précédentes.</strong>

  http://localhost:8000/index.html :

        État 200 OK
        Version HTTP/1.1
        Transfert 1,05 Ko (taille 895 o)
        Priorité de la requête Highest
        Résolution DNS Système

  http://localhost:8000/random.html :

        État 200 OK
        Version HTTP/1.1
        Transfert 178 o (taille 22 o)
        Priorité de la requête Highest
        Résolution DNS Système

  http://localhost:8000/ :

        État 200 OK
        Version HTTP/1.1
        Transfert 1,05 Ko (taille 895 o)
        Priorité de la requête Highest
        Résolution DNS Système

  http://localhost:8000/dont-exist :

        État 404 Not Found
        Version HTTP/1.1
        Transfert 197 o (taille 34 o)
        Priorité de la requête Highest
        Résolution DNS Système

<strong>Question 2.1 donner les URL des documentations de chacun des modules installés par la commande précédente.</strong>

  Avec la commande "npm fund" on obtient les URLs des différentes documentations :

        https://tidelift.com/funding/github/npm/loglevel
        https://opencollective.com/eslint
        https://github.com/sponsors/nzakas
        https://github.com/sponsors/epoberezkin
        https://github.com/chalk/chalk?sponsor=1
        https://github.com/chalk/ansi-styles?sponsor=
        https://github.com/sponsors/feross
        https://github.com/sponsors/isaacs
        https://github.com/sindresorhus/eslint-plugin-unicorn?sponsor=1
        https://github.com/sponsors/sibiraj-s
        https://opencollective.com/nodemon
        https://paulmillr.com/funding/
        https://github.com/prettier/prettier?sponsor=1
        https://github.com/sponsors/ljharb
        https://opencollective.com/typescript-eslint
        https://github.com/sponsors/mysticatea
    

<strong>Question 2.2 vérifier que les trois routes fonctionnent.</strong>

  GET http://localhost:8000/index.html :

        État 200 OK
        Version HTTP/1.1
        Transfert 1,21 Ko (taille 895 o)
        Priorité de la requête Highest
        Résolution DNS Système

  GET http://localhost:8000/ :

        État 200 OK
        Version HTTP/1.1
        Transfert 1,21 Ko (taille 895 o)
        Priorité de la requête Highest
        Résolution DNS Système

  	
  GET http://localhost:8000/random/12 :

        État 200 OK
        Version HTTP/1.1
        Transfert 393 o (taille 164 o)
        Priorité de la requête Highest
        Résolution DNS Système


<strong>Question 2.3 lister les en-têtes des réponses fournies par Express. Lesquelles sont nouvelles par rapport au serveur HTTP ?</strong>

  http://localhost:8000/random/12 :

        HTTP/1.1 200 OK
        X-Powered-By: Express
        Content-Type: text/html; charset=utf-8
        Content-Length: 164
        ETag: W/"a4-WyWnJ3lUWW5EdJ5gk58uADy3DsU"
        Date: Wed, 27 Sep 2023 10:28:16 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5

  http://localhost:8000/ :

        HTTP/1.1 200 OK
        X-Powered-By: Express
        Accept-Ranges: bytes
        Cache-Control: public, max-age=0
        Last-Modified: Wed, 27 Sep 2023 06:27:53 GMT
        ETag: W/"37f-18ad55295e6"
        Content-Type: text/html; charset=UTF-8
        Content-Length: 895
        Date: Wed, 27 Sep 2023 10:34:07 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5

  http://localhost:8000/index.html : 

        HTTP/1.1 200 OK                                               
        X-Powered-By: Express                                   
        Accept-Ranges: bytes                                    
        Cache-Control: public, max-age=0                        
        Last-Modified: Wed, 27 Sep 2023 06:27:53 GMT            
        ETag: W/"37f-18ad55295e6"                               
        Content-Type: text/html; charset=UTF-8
        Content-Length: 895
        Date: Wed, 27 Sep 2023 10:36:44 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5

  http://localhost:8000/index.html :

        HTTP/1.1 200 OK
        Content-Type: text/html
        Date: Wed, 27 Sep 2023 10:54:52 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5
        Transfer-Encoding: chunked
        
  ci, nous comparons localhost:8000/index.html. À gauche, nous voyons que l'API Express ajoute de nouveaux en-têtes, notamment "X-Powered-By: Express", "Accept-Ranges: bytes", "Cache-Control: public, max-age=0", "Last-Modified: Wed, 27 Sep 2023 06:27:53 GMT", "ETag: W/"37f-18ad55295e6"", "Content-Type: text/html; charset=UTF-8", et "Content-Length: 895".
  

<strong>Question 2.4 quand l'événement listening est-il déclenché ?</strong>

  L'événement "listening" est déclenché une fois que le serveur est opérationnel et prêt à accepter les connexions HTTP entrantes. Cela se produit lorsque le serveur a lié avec succès un port spécifié et est prêt à gérer les requêtes HTTP entrantes.
  

<strong>Question 2.5 indiquer quelle est l'option (activée par défaut) qui redirige / vers /index.html ?</strong>

  L'option qui redirige automatiquement / vers /index.html se trouve dans "express.static". Cette fonctionnalité est spécifique à cette fonction. Elle vérifie si le fichier "index.html" existe dans le dossier statique et le renvoie directement en réponse à "/" si aucun chemin de fichier spécifique n'est spécifié.


<strong>Question 2.6 visiter la page d'accueil puis rafraichir (Ctrl+R) et ensuite forcer le rafraichissement (Ctrl+Shift+R). Quels sont les codes HTTP sur le fichier style.css ? Justifier.</strong>

  http://localhost:8000/style.css avec (Ctrl+R) :

        État 304 Not Modified
        Version HTTP/1.1
        Transfert 719 o (taille 454 o)
        Politique de référent strict-origin-when-cross-origin
        Résolution DNS Système

  http://localhost:8000/style.css avec (Ctrl+Shift+R) :

        État 200 OK
        Version HTTP/1.1
        Transfert 769 o (taille 454 o)
        Politique de référent strict-origin-when-cross-origin
        Résolution DNS Système

  Pour cette question, nous devons activer le cache. Avec le cache activé, lorsque nous utilisons simplement (Ctrl+R) pour rafraîchir la page, le navigateur envoie une requête avec l'en-tête "If-Modified-Since". Si le fichier n'a pas été modifié depuis la dernière requête, le serveur renvoie un statut "304 Not Modified" pour indiquer que le fichier n'a pas besoin d'être téléchargé à nouveau, car il est toujours dans le cache du navigateur.

  En revanche, avec (Ctrl+Shift+R), nous forçons le rafraîchissement du cache. Par conséquent, le serveur renvoie le fichier CSS comme s'il était nouveau, d'où le statut "200 OK".


<strong>Question 2.7 vérifier que l'affichage change bien entre le mode production et le mode development.</strong>

  Affichage en mode production:

        Internal Server Error

  Affichage en mode développement:

        ReferenceError: console is not defined
        at file:///Users/oliviertram/Desktop/devweb-tp5/TRAM_Olivier_CC3/server-express.mjs:38:3
        at Layer.handle_error (/Users/oliviertram/Desktop/devweb-tp5/TRAM_Olivier_CC3/node_modules/express/lib/router/layer.js:71:5)
        at trim_prefix (/Users/oliviertram/Desktop/devweb-tp5/TRAM_Olivier_CC3/node_modules/express/lib/router/index.js:326:13)
        at /Users/oliviertram/Desktop/devweb-tp5/TRAM_Olivier_CC3/node_modules/express/lib/router/index.js:286:9
        at Function.process_params (/Users/oliviertram/Desktop/devweb-tp5/TRAM_Olivier_CC3/node_modules/express/lib/router/index.js:346:12)
        at next (/Users/oliviertram/Desktop/devweb-tp5/TRAM_Olivier_CC3/node_modules/express/lib/router/index.js:280:10)
        at Layer.handle [as handle_request] (/Users/oliviertram/Desktop/devweb-tp5/TRAM_Olivier_CC3/node_modules/express/lib/router/layer.js:97:5)
        at trim_prefix (/Users/oliviertram/Desktop/devweb-tp5/TRAM_Olivier_CC3/node_modules/express/lib/router/index.js:328:13)
        at /Users/oliviertram/Desktop/devweb-tp5/TRAM_Olivier_CC3/node_modules/express/lib/router/index.js:286:9
        at Function.process_params (/Users/oliviertram/Desktop/devweb-tp5/TRAM_Olivier_CC3/node_modules/express/lib/router/index.js:346:12)
