import homeController from "../controllers/home-controller.js";

export default (router) => {
    router.get('/', homeController.index)
    router.get('/about', homeController.about)
    router.get('/contact', homeController.contact)
    router.post('/contact', homeController.contactPost)
    router.get('/gateaux', homeController.cookie)
    router.get('/session', homeController.session)
    router.post('/session/create', homeController.sessionCreate)
    router.get('/session/destroy', homeController.sessionDestroy)
}