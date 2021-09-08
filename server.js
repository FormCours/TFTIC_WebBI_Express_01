import express from 'express';
import serverConfig from './config/server.json';
import router from './routes/router.js';

import errorHandler from 'errorhandler';
import cookieParser from 'cookie-parser';
import session from 'express-session';

/****************************************************************/
// Pour info : La variable '__dirname' n'existe pas lorsque 
// le projet  est en mode "type = module" (Pour les imports es6+)
// Il est possible d'obtenir l'equivalence via le code suivante
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
//console.log(__dirname);
/****************************************************************/

// Création du server Web
const app = express();

// Ajout d'un middleware qui log les requetes
app.use((req, res, next) => {
    console.log(`Requete : ${req.method} ${req.url}`);
    next();
});

// Configuration
let config;
if(process.argv.includes('--production')) {
    config = serverConfig.production;
}
else {
    config = serverConfig.developement
}
const {port} = config;

// Configuration du moteur de vue
app.set('view engine', 'ejs');
app.set('views', './views');

// Ajouter la gestion des fichiers static (css, js, image, ...)
app.use(express.static('css'));
app.use(express.static('public'));

// Ajouter des middlewares pour gerer les formulaires
app.use(express.urlencoded({extended: true}));  // "application/xwww-form-urlencoded"
app.use(express.json());                        // "application/json"

// Ajouter le middleware pour gérer les cookies
app.use(cookieParser('Ceci est la clef secret qui permet au cookie d\'etre signé'));

// Ajout du middleware pour gérer la session
app.use(session({
    secret: 'Clef secret pour les sessions',
    resave: true,
    saveUninitialized: true
}));

// Utilisation des routers
app.use(router)

// Middlewares pour gérer les exceptions
if(process.argv.includes('--production')) { 
    // TODO Ajouter une page d'error 500 ;)
}
else {
    app.use(errorHandler());
}

// Demarrage du server
app.listen(port, () => {
    console.log(`Web server on ${port}`);
})