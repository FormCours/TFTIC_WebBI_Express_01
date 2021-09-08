
export default function (router) {

    // Exemple avec une variable commune au 2 routes (variable globale)
    let message;

    router.get('/chainage/test', (req, res, next) => {
        console.log('Chainage 1 (part 1)');

        // Activation du chainage => Activation d'une autre route
        next();

        console.log('Chainage 1 (part 2)');
        res.send('Chainage (zone 1) : ' + message)
    })

    router.get('/chainage/test', (req, res) => {
        console.log('Chainage 2');

        // Modification de la variable
        message = 'Salut, je suis initialiser dans la zone 2'
    })

}