const db = require("../util/database");
const helper = require('./helper');

module.exports = class Question{
    constructor(QuestionNumber,ExamID,Text,CorrectAnswer,Weight){
        this.QuestionNumber = QuestionNumber;
        this.ExamID = ExamID;
        this.Text = Text;
        this.CorrectAnswer = CorrectAnswer;
        this.Weight = Weight;
    }

    static findAll(){
        return db.execute('SELECT * FROM questions');
    }

    static findById(number,id){
         return db.execute(`SELECT * FROM questions WHERE ExamID = ${id} AND QuestionNumber = ${number}`);
    }
    
    save(){
        return db.execute(`INSERT INTO questions(QuestionNumber, ExamID, Text, CorrectAnswer, Weight) VALUES (${this.QuestionNumber},${this.ExamID},'${this.Text}','${this.CorrectAnswer}',${this.Weight});`)
    };

    static findByIdAndDelete(num,id){
        return db.execute(`DELETE FROM questions WHERE QuestionNumber = ${num} AND ExamID = ${id}`);
    }

     static findByIdAndUpdate(num,id,queryObj){
        let query = helper.parseSQL(queryObj);
        let sql = 
        `UPDATE questions
        SET ${query}
        WHERE ExamID = ${id} AND QuestionNumber = ${num}
        `
       // console.log(sql);
        return db.execute(sql);
       
    }
    
}