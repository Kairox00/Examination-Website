const db = require("../util/database");
const helper = require("./helper");

module.exports = class Candidate {
    constructor(FirstName,LastName,Email,Password){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password
    }

    static findAll(){
        return db.execute("SELECT * FROM candidates");
    }

    static findById(id){
        return db.execute(`SELECT * FROM candidates WHERE CandidateID = ${id}`)
    }

    save(){
        return db.execute(`INSERT INTO candidates(FirstName, LastName, Email, Password) VALUES ('${this.FirstName}','${this.LastName}','${this.Email}','${this.Password}');`)
    }

    static findByIdAndDelete(id){
        return db.execute(`DELETE FROM candidates WHERE CandidateID = ${id}`);
    }

    static findByIdAndUpdate(id,queryObj){
        let query = helper.parseSQL(queryObj);
        let sql = 
        `UPDATE candidates
        SET ${query}
        WHERE CandidateID = ${id}
        `
       // console.log(sql);
        return db.execute(sql);
       
    }

    static findAllCandidateExams(candId){
        let sql=`
        SELECT * FROM candidate_exams ce
        INNER JOIN exams e ON e.ExamID = ce.ExamID
        WHERE CandidateID = ${candId}
        `
        return db.execute(sql);
    }

    static findCandidateExamAnswers(candId,examId){
        let sql =`
        SELECT QuestionNumber, ChoiceNumber FROM candidatechoices
        WHERE ExamID = ${examId} AND CandidateID = ${candId}
        `
        return db.execute(sql);
    }

    static findCandidateQuestionAnswer(candId,examId,qNo){
        let sql =`
        SELECT ChoiceNumber FROM candidatechoices
        WHERE ExamID = ${examId} AND CandidateID = ${candId} AND QuestionNumber = ${qNo}
        `
        return db.execute(sql);
    }

    static findExamGrade(candId,examId){
        let sql=`
        SELECT SUM(q.Weight)
        FROM candidatechoices cc 
        INNER JOIN choices c ON c.ChoiceNumber = cc.ChoiceNumber
        INNER JOIN questions q ON q.QuestionNumber = cc.QuestionNumber
        WHERE LOWER(q.CorrectAnswer) = LOWER(c.Text) 
        AND cc.CandidateID = ${candId} 
        AND cc.ExamID = ${examId}
        `
        return db.execute(sql);
    }

    static insertAnswer(candId, examId, questionNo, choNo){
        let sql =`
        INSERT INTO (CandidateID, ExamID, QuestionNumber, ChoiceNumber) VALUES (${candId}, ${examId}, ${questionNo}, ${choNo})
        `
        return db.execute(sql);
    }


}