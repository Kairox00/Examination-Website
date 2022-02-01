import axios from "axios"
import { useState,useEffect } from "react"
import {Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export default function CandidateExamList(props) {
    const navigate = useNavigate();
    const [list,setList] = useState([]);
    const user = props.user;

    useEffect(() => {
        fetchExams();
    },[]);
    
    const fetchExams = ()=>{
        axios.get(`/candidate/${user.CandidateID}/exam`)
        .then((response)=>{
            setList(response.data);
        })
    }

    const takeExam = (ExamId)=>{
        navigate('/Exam',{state: {ExamID: ExamId, CandidateID: user.CandidateID}});
    }

    const tableList = list.map((exam,index)=>{
        const date = new Date(exam.Date);
        const status = exam.Submitted;
        return (
            <tr key={index}>
                <td>{exam.ExamID}</td>
                <td>{exam.StartTime}</td>
                <td>{exam.DueTime}</td>
                <td>{exam.Duration}</td>
                <td>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</td>
                <td><Button disabled={status} onClick={()=>{takeExam(exam.ExamID)}}>Take Exam</Button></td>
            </tr>
        )
    })

    return(
        <tbody>
             {tableList}
        </tbody>
       
    )
}