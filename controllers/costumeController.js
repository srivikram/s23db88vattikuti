const Costume = require('../models/costume');

// Controller for retrieving a list of all costumes
exports.costume_list = function (req, res) {
    // TODO: Implement logic for retrieving a list of all costumes
    res.send('NOT IMPLEMENTED: Costume list');
};

// Controller for retrieving details of a specific costume by ID
exports.costume_detail = function (req, res) {
    // TODO: Implement logic for retrieving details of a specific costume by ID
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};

// Controller for creating a new costume
exports.costume_create_post = function (req, res) {
    // TODO: Implement logic for creating a new costume
    res.send('NOT IMPLEMENTED: Costume create POST');
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

// List of all Costumes
exports.costume_list = async function (req, res) {
    try {
        // Use the `await` keyword to wait for the MongoDB query to complete
        // and retrieve all documents from the "Costume" collection using the Mongoose model "Costume"
        const theCostumes = await Costume.find();

        // Send the retrieved documents as a JSON response
        res.send(theCostumes);
    } catch (err) {
        // If an error occurs, set the response status to 500 (Internal Server Error)
        // and send an error message as JSON
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
