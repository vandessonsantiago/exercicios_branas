const pgp = require('pg-promise');

class Connection {
    constructor () {
        this.connection = pgp()("postgres://@localhost:5432/app_database");
    }

    query (statement, params) {
        return this.connection.query(statement, params);
    
    }
}
module.exports = Connection;