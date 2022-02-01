import React,{useState, useEffect} from 'react';
import Auth from '../services/Auth';
import Login from './Login';

export default function Home(){
    const [user,setUser] = useState();

    useEffect(() => {
    setUser(Auth.getCurrentUser());  
    }, []);
    

    return(
        <div>
            {user && <h1>Hello {user.FirstName}</h1>}
            <Login/>
        </div>
        
    )
}