const db = require("../util/database");

module.exports = class Customer{
    constructor(name,address){
        this.name = name;
        this.address = address;

    }

    static findAll(){
        return db.execute('SELECT * FROM customers');
    }

}