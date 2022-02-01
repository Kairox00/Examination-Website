import React, {useState} from 'react'
import { Alert,Form,Button } from 'react-bootstrap';
import Auth from '../services/Auth';
import {useNavigate} from 'react-router-dom';
//import axios from 'axios';

export default function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [displayFlash,setFlash] = useState(false);
    const [errMsg,setErrMsg] = useState('Error');
    const navigate = useNavigate();
    
    const handleLogin = ()=>{
        Auth.login(username, password)
        .then((res)=>{
            navigate('/CandidatePortal') ;
        }).catch((err)=>{
                //console.log(err.response);
                setErrMsg(err.response.data.message);
                setFlash(true)
            })
        // axios.get(`/candidate/${username}`)
        // .then((res)=>{
        //     if(res.data.Password === password){
        //         console.log(res.data)
        //         return res.data;
        //     } 
        //     else{
        //         console.log("wrong sth");
        //         return {err: "Wrong password"};
        //     }
           
        // })
    }

    return(
       <div>
           {
               displayFlash &&
                <Alert variant='warning' onClose={()=>setFlash(false)} dismissible>
                    {errMsg}
                </Alert>
           }
           <h3 style={{fontWeight:600, marginBottom:'20px', color:'darkblue'}}>Login</h3>
           {/* <input type='text' placeholder='username' name='username' onChange={(e)=>setUsername(e.target.value)}/>
           <input type='password' placeholder='password' name='password' onChange={(e)=>setPassword(e.target.value)} />
           <button onClick={handleLogin}>Login</button> */}
           <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Form>
       </div>

    )
}