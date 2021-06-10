import { result } from 'lodash';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';

function Login(props) {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add");
        }
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function login() {

        let item = { email, password };

        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        {result.error?history.push("/login"):history.push("/add");}
        
    }

    return (
        <div>
            <Header />

            <div className="col-sm-6 offset-sm-3">
                {/* {result.error?<h1>{result.error}</h1>:null} */}
                <h1><u>Logign</u></h1>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" placeholder="Email" /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" placeholder="password" /><br />
                <button onClick={login} className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
}

export default Login;