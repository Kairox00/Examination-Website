import { Table } from "react-bootstrap"
import CandidateExamList from "./CandidateExamList"
import { useState, useEffect } from "react";
import Auth from "../services/Auth";

export default function CandidateExamsTable(){
     const [user,setUser] = useState(Auth.getCurrentUser());

    useEffect(() => {
        setUser(Auth.getCurrentUser());        
    }, []);

    return(
        <Table striped hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>StartTime</th>
                    <th>DueTime</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            
                <CandidateExamList user={user}/>
            
        </Table>
    )
}