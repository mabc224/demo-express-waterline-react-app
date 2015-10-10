/**
 * user.js
 * Default description.
 *
 * @author Arsalan Bilal <mabc224gmail.com>
 * @created 10/10/2015
 */

var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    // tableName corresponds to database table name
    tableName: 'user',

    // connection name corresponds to the connection we define in configs/connections.js
    connection: 'default',

    attributes: {
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        }
    }
});