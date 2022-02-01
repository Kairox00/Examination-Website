import axios from "axios";
import { Container, Form } from "react-bootstrap";
import {useState, useEffect} from "react";

export default function Question(props){
    const {Text, QuestionNumber} = props.question;
    const [choices,setChoices] = useState([]);
    const [chosenAnswer,setChosenAnswer] = useState();

    useEffect(() => {
        fetchChoices();
    },[]);

    useEffect(()=>{
        props.setAnswer(QuestionNumber,chosenAnswer);
    },[chosenAnswer])
    

    const fetchChoices = ()=>{
        axios.get(`/exam/${props.ExamID}/question/${QuestionNumber}/choice`)
        .then((response)=>{
            setChoices(response.data);
        })
        
    }

    const choicesList = choices.map((choice,index)=>{
        return(
            <Form.Check onClick={()=>{setChosenAnswer(choice.ChoiceNumber)}} name={QuestionNumber} type='radio' id={choice.ChoiceNumber} key={index} label={choice.Text}/>
        )
    })
    
    return(
        <Container>
            <hr/>
            <span>{Text}</span>
            <hr/>
            <div key={QuestionNumber}>
                {choicesList}
            </div>
        </Container>
    )
}