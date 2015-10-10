/**
 * db.js
 * Default description.
 *
 * @author Arsalan Bilal <mabc224gmail.com>
 * @created 10/10/2015
 */

var Waterline = require('waterline');

// create new instance of waterline
var orm = new Waterline();

// get connection configs
var connectionConfig = require('./connections');

// load model definitions
var User = require('../models/user.js');

// load models into orm
orm.loadCollection(User);
// you can load more collections (models) here

// export an orm object
module.exports = {};

// initialize function
module.exports.initialize = function(app, callback) {
    // Initialize the whole database and store models and connections to app
    orm.initialize(connectionConfig, function(err, models) {
        if(err) throw err;

        // pass the collections (models) and connections created to app
        callback(models.collections, models.connections);

    });
}