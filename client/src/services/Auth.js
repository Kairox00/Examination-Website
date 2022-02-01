import axios from 'axios'

class Auth{
    login(username,password){
        return axios.get(`/candidate/${username}`)
        .then((res)=>{
            if(res.data.Password === password){
                console.log(res.data)
                localStorage.setItem('user',JSON.stringify(res.data));
                return res.data;
            } 
            else{
                console.log("wrong sth");
                return {err: "Wrong password"};
            }
        })
    }

    getCurrentUser(){
        const user = localStorage.getItem('user')
        if(user){
            return JSON.parse(user);
        }
    }


}

export default new Auth();