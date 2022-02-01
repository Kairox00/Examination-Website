import axios from "axios"
import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function Exam(props){

    const [questions,setQuestions] = useState([]);
    const location = useLocation();

    useEffect(() => {
      fetchQuestions();
    }, []);
    

    const fetchQuestions = ()=>{
        axios.get(`/exam/${location.state.ExamID}/question`)
        .then((response)=>{
            setQuestions(response.data);
        })
    }

    const questionsList = questions.map((question,index)=>{
        return (<li key = {index}> {question.Text} </li>)
    })

    return(
        <Container>
            {questionsList}
        </Container>
    )
}