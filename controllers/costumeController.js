const Costume = require('../models/costume');

// List of all Costumes
exports.costume_list = async function (req, res) {
    try {
        const theCostumes = await Costume.find();
        res.send(theCostumes);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Controller for retrieving details of a specific costume by ID
exports.costume_detail = async function (req, res) {
    try {
        result = await Costume.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Controller for creating a new costume
exports.costume_create_post = async function (req, res) {
    console.log(req.body);
    let document = new Costume();

    // Set the properties of the new Costume object based on the request body
    document.hat_type = req.body.hat_type;
    document.color = req.body.color;
    document.price = req.body.price;

    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Controller for deleting a specific costume by ID
exports.costume_delete = function (req, res) {
    // TODO: Implement logic for deleting a specific costume by ID
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};

// Controller for updating a specific costume by ID
exports.costume_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Costume.findById(req.params.id)
        // Do updates of properties
        if (req.body.hat_type) toUpdate.hat_type = req.body.hat_type;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
};
