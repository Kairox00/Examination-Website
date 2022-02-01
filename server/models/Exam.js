const db = require("../util/database");
const helper = require('./helper');

module.exports = class Exam{
    constructor(Duration, Date, StartTime, DueTime, GradeMax, ExaminerID){
        this.Duration = Duration;
        this.Date = Date;
        this.StartTime = StartTime;
        this.DueTime = DueTime;
        this.GradeMax = GradeMax;
        this.ExaminerID = ExaminerID;
    }

    static findAll(){
         return db.execute("SELECT * FROM exams");
    }

    static findById(id){
        return db.execute(`SELECT * FROM exams WHERE ExamID = ${id}`)
    }

    save(){
        return db.execute(`INSERT INTO exams(Duration, Date,StartTime, DueTime, GradeMax, ExaminerID) VALUES (${this.Duration},'${this.Date}','${this.StartTime}','${this.DueTime}',${this.GradeMax},${this.ExaminerID});`)
    }

    static findByIdAndDelete(id){
        return db.execute(`DELETE FROM exams WHERE ExamID = ${id}`);
    }

    static findByIdAndUpdate(id,queryObj){
        let query = helper.parseSQL(queryObj);
        let sql = 
        `UPDATE exams
        SET ${query}
        WHERE ExamID = ${id}
        `
       // console.log(sql);
        return db.execute(sql);
       
    }

}