> app with Express.js, waterline, postgres, react.js (server side)

This is an example web application built with Express.js v4.13.1 and waterline v0.10.26 and sails-postgresql v0.10.16 and react v0.14

The full source code is available at [https://github.com/mabc224/demo-express-waterline-react-app.git](https://github.com/mabc224/demo-express-waterline-react-app.git).


### Setup application on local machine

1. install [node](http://nodejs.org/) and [postgre](http://www.postgresql.org/download/) (if not already installed)
2. clone the repository `git clone https://github.com/mabc224/demo-express-waterline-react-app.git`
3. go to the new folder `cd demo-express-waterline-react-app`
4. install dependencies `npm install`
5. setup database database
    1 create a database name as `sample`
    2 create a table `user` with two fields as `email` and `name` having datatype as text
6. configure postgres database connection in  config/connections.js accordingly
```shell
module.exports = {

    .....

    // setup all type of connections you could have
    connections: {
        // Postgres connection configs
        default: {
            adapter: 'postgresql',  // Don't change this
            database: 'sample',     // Postgres database name
            host: 'localhost',      // Postgres database host
            user: 'postgres',       // Postgres database username
            password: 'root',       // Postgres database password
            port: 5432,             // Postgres database port
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

        migrate: 'safe'
    }
};
```
7. run `node bin/www` and the application will run on [http://localhost:3000](http://localhost:3000)