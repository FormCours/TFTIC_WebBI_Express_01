export default {

    index: (req, res) => {
        res.send('List des produits ???');
    },

    detail: (req, res) => {
        const {id} = req.params;

        res.send('Detailt du product ' + id)
    }
}