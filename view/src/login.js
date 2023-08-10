import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import swal from "sweetalert";

function Login()
{
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    async function validate(event) 
    {
        event.preventDefault();
      
        // Make an API request to your server-side authentication endpoint
        const response = await fetch('http://127.0.0.1:5000/login', 
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify
            ({
                username,
                password,
            }),
        });
      
        // Parse the response as JSON
        const data = await response.json();
      
        // Check the authentication result
        if (response.ok && data.authenticated) {
            // Authentication successful
            swal('Login successful', 'You remembered your details!', 'success');
        } 
        else 
        {
            // Authentication failed
            swal('Invalid Credentials', 'Invalid username or password', 'error');
        }
    }
      

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-4 card">
                    <h1 className="header">User Authentication</h1>

                    <form onSubmit={validate}>
                        <input className="form-control" type="text" placeholder="username" 
                            onChange={(e)=> setUsername(e.target.value)}/>                            
                        <input className="form-control" type="text" placeholder="password" 
                            onChange={(e)=> setPassword(e.target.value)}/>
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;