import React, { useState } from "react";

function Register(){
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');

    async function studentRegister(e){
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:4002/register',{
                method: 'POST',
                body: JSON.stringify({ userName, userPassword, userEmail }),
                headers: { 'Content-Type': 'application/json' }
            });
            const jsonResponse = await response.json();
            alert(jsonResponse.msg);
        }catch(err){
            alert(err.message || err);
        }
    }
    return (
        <div>
            <form onSubmit={studentRegister}>
                <div className="form-group">
                    <label htmlFor="nameInput">Enter Name</label>
                    <input type="text" onChange={(e)=> setUserName(e.target.value)} className="form-control" id="nameInput" placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input type="email" onChange={(e)=> setUserEmail(e.target.value)} className="form-control" id="emailInput" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" onChange={(e)=> setUserPassword(e.target.value)} className="form-control" id="passwordInput" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register;