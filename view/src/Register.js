import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import swal from "sweetalert";
import axios from "axios";

function Register()
{
    const[email, setEmail] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    function registration(event)
    { 
        event.preventDefault();
        const base_url = "http://127.0.0.1:5000/user";
        const data= {
                        email: email,
                        username: username,
                        password: password
                    }
        axios.post(base_url, data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
        console.log(JSON.stringify(data))
        swal("Account Created");
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-4 card">
                    <h1 className="header">User Registration</h1>

                    <form onSubmit={registration}>
                        <input className="form-control" type="text" placeholder="email" 
                            onChange={(e)=> setEmail(e.target.value)}/>                            
                        <input className="form-control" type="text" placeholder="username" 
                            onChange={(e)=> setUsername(e.target.value)}/>
                        <input className="form-control" type="text" placeholder="password" 
                            onChange={(e)=> setPassword(e.target.value)}/>
                        <input className="btn btn-primary" type="submit" value="Register" />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register;