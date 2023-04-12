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
exports.costume_detail = function (req, res) {
    // TODO: Implement logic for retrieving details of a specific costume by ID
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};

// Controller for creating a new costume
exports.costume_create_post = async function (req, res) {
    console.log(req.body);
    let document = new Costume();

    // Set the properties of the new Costume object based on the request body
    document.costume_type = req.body.costume_type;
    document.cost = req.body.cost;
    document.size = req.body.size;

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
exports.costume_update_put = function (req, res) {
    // TODO: Implement logic for updating a specific costume by ID
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
