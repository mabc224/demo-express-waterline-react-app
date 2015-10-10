> app with Express.js, waterline, postgres, react.js (server side)

This is an example web application built with Express.js v4.13.1 and waterline v0.10.26 and sails-postgresql v0.10.16 and react v0.14

The full source code is available at [https://github.com/mabc224/demo-express-waterline-react-app.git](https://github.com/mabc224/demo-express-waterline-react-app.git).


### Setup application on local machine

1. install [node](http://nodejs.org/) and [postgre](http://www.postgresql.org/download/) (if not already installed)
2. clone the repository `git clone https://github.com/mabc224/demo-express-waterline-react-app.git`
3. go to the new folder `cd demo-express-waterline-react-app`
4. install dependencies `npm install`
6. configure postgres database connection in  config/connections.js (Optional, It is using live postgres db)
```shell
module.exports = {

    // configure this part
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


};
```
7. run `node bin/www` and the application will run on [http://localhost:3000](http://localhost:3000)