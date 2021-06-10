import { Button } from 'bootstrap';
import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../Header';

function Register() {

    useEffect(()=>{
        
        if(localStorage.getItem('user-info')){
            
            history.push("/add");
        }
    },[])

    const history = useHistory();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function SignUp(){
       let item = {name,email,password};
       
       let result = await fetch("http://localhost:8000/api/register",{
           method:'POST',
           body:JSON.stringify(item),
           headers:{
               'Content-Type': 'application/json',
               'Accept' : 'application/json'
           }
       })
       result = await result.json();
       localStorage.setItem("user-info",JSON.stringify(result));
       history.push("/add");
    }
    return (
        <>
        <Header />
        <div>
            
            <div className="col-sm-6 offset-sm-3">
               <h1><u>Register</u></h1>
               <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" name="name" placeholder="Name" /> <br/>
               <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" name="email" placeholder="Email" /><br/>
               <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" name="password" placeholder="password"/><br/>
               <button onClick={SignUp} className="btn btn-primary">Submit</button>
            </div>
        </div>
        </>
    );
}

export default Register;