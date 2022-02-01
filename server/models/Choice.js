const db = require("../util/database");
const helper = require('./helper');

module.exports = class Choice{
    constructor(QuestionNumber,ExamID,ChoiceNumber,Text){
        this.QuestionNumber = QuestionNumber;
        this.ExamID = ExamID;
        this.ChoiceNumber = ChoiceNumber;
        this.Text = Text;
       
    }

    static findAll(){
        return db.execute('SELECT * FROM choices');
    }

    static findById(chno,qno,id){
         return db.execute(`SELECT * FROM choices WHERE ExamID = ${id} AND QuestionNumber = ${qno} AND ChoiceNumber = ${chno}`);
    }
    
    save(){
        return db.execute(`INSERT INTO choices(ChoiceNumber, QuestionNumber, ExamID, Text) VALUES (${this.ChoiceNumber},${this.QuestionNumber},${this.ExamID},'${this.Text}')`)
    };

    static findByIdAndDelete(chno,qno,id){
        return db.execute(`DELETE FROM choices WHERE QuestionNumber = ${qno} AND ExamID = ${id} AND ChoiceNumber = ${chno}`);
    }

     static findByIdAndUpdate(chno,qno,id,queryObj){
        let query = helper.parseSQL(queryObj);
        let sql = 
        `UPDATE choices
        SET ${query}
        WHERE ExamID = ${id} AND QuestionNumber = ${qno} AND ChoiceNumber = ${chno}
        `
       // console.log(sql);
        return db.execute(sql);
       
    }
    
}