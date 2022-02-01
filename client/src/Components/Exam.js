import axios from "axios"
import {useEffect, useState} from "react";
import {Button, Container,Form} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Question from "./Question";

export default function Exam(props){

    const [questions,setQuestions] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const answers =new Map();

    useEffect(() => {
        fetchQuestions();
    }, []);

    const setAnswer = (questionNo,newAnswer)=>{
       answers.set(questionNo,newAnswer);
       console.log(answers);
    }

    const submitExam = ()=>{
       // e.preventDefault();
        let temp = []
        for(const answer of answers){
            console.log(answer);
            temp = [...temp,answer];
        }
        console.log(temp);
        axios.post(`/candidate/${location.state.CandidateID}/exam/${location.state.ExamID}`,{answers: temp})
        .then((response)=>{
            console.log(response.data);
            navigate('/CandidatePortal');
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    

    const fetchQuestions = ()=>{
        axios.get(`/exam/${location.state.ExamID}/question`)
        .then((response)=>{
            setQuestions(response.data);
        })
    }

    const questionsList = questions.map((question,index)=>{
        return (<Question question={question} key={index} ExamID={location.state.ExamID} setAnswer={setAnswer}/>)
    })

    return(
        <Container>
            <Form >
                {questionsList}
                <Button onClick={submitExam} variant='success'>Submit Answers</Button>
            </Form>
        </Container>
    )
}