import productController from "../controllers/product-controller.js";

export default (router) => {
    router.get('/product', productController.index);
    router.get('/product/:id', productController.detail);
};