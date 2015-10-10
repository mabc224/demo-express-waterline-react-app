/**
 * connections.js
 * Default description.
 *
 * @author Arsalan Bilal <mabc224gmail.com>
 * @created 10/10/2015
 */
var postgresAdapter = require('sails-postgresql');

module.exports = {

    // setup adapters for each type of database
    adapters: {
        postgresql: postgresAdapter
    },

    // setup all type of connections you could have
    connections: {
        // Postgres connection configs
        default: {
             adapter: 'postgresql',
             database: 'sample',
             host: 'localhost',
             user: 'postgres',
             password: 'root',
             port: 5432,
             pool: false,
             ssl: false
        }
    },

    // some config about migration or something
    defaults: {
        // migration mode
        // safe  - never auto-migrate my database(s). I will do it myself (by hand)
        // alter - auto-migrate, but attempt to keep my existing data (experimental)
        // drop  - wipe/drop ALL my data and rebuild models every time I run node bin/www

        migrate: 'drop' //  // safe, alter, drop'
    }
};