const db = require("../util/database");
const helper = require('./helper');

module.exports = class Examiner{
    constructor(name,Email,password){
        this.name = name;
        this.Email = Email;
        this.Password = password;
    }

    static findAll(){
        return db.execute('SELECT * FROM examiners');
    }

    static findById(id){
         return db.execute(`SELECT * FROM examiners WHERE ExaminerID = ${id}`)
    }
    
    save(){
        return db.execute(`INSERT INTO examiners(name, Email, Password) VALUES ('${this.name}','${this.Email}','${this.Password}');`)
    };

    static findByIdAndDelete(id){
        return db.execute(`DELETE FROM exmainers WHERE ExaminerID = ${id}`);
    }

     static findByIdAndUpdate(id,queryObj){
        let query = helper.parseSQL(queryObj);
        let sql = 
        `UPDATE examiners
        SET ${query}
        WHERE ExaminerID = ${id}
        `
       // console.log(sql);
        return db.execute(sql);
       
    }
}