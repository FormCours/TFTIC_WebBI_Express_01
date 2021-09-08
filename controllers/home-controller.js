export default {

    index: (req, res) => {
        console.log('La page home !');
        
        // ↓ Envoye une donnée brute
        // res.send('Home');

        // ↓ Resultat depuis le moteur de vue
        res.render('home/index');
    },

    about: (req, res) => {
        const donald = {
            firstname: 'Della',
            lastname: 'Duck'
        };

        res.render('home/about', {user: donald});
    },

    contact: (req, res) => {
        res.render('home/contact');
    },

    contactPost: (req, res) => {
        const {username, message} = req.body;
        console.log(`Message recu : (${username}) -> ${message}`);

        res.render('home/contact-response', {username});
    },

    cookie: (req, res) => {

        // res.cookie('CookieDemo', 'Web BI <3');

        res.cookie('CookieSecure', 'The cake is lie', {
            signed: true,
            sameSite: 'strict',
            expires: new Date(Date.now + (24 * 60 * 60 * 1000))
        });

        res.render('home/cookie');
    },


    session: (req, res) => {
        console.log('session', req.session);

        res.render('home/session', {session : req.session});
    },

    sessionCreate: (req, res) => {
        const {pseudo} = req.body;

        const dataSession = {
            pseudo: pseudo,
            role: 'demo'
        }

        req.session.user = dataSession;

        //res.send('session créé');
        res.redirect('/session');
    },

    sessionDestroy: (req, res) => {
        req.session.destroy();
        
        //res.send('session detruite');
        res.redirect('/session');
    }
}