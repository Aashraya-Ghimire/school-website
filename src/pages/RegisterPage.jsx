import React from 'react';
import "./Registerpage.css";
const RegisterPage = () => {
    return (
        <div id="main5">
            <div id="reg">
                <h1>Registration Form</h1>
                <form action="">
                    <div id="inputs">
                        <input id="name" type="text" name="fullname" placeholder="Full Name" required>
                        </input >
                        <input type=" text" name="username" placeholder="User Name" id="username" required></input>
                        <input type="text" name="school id" placeholder='School ID' required/>
                        <input type="email" name="email" placeholder="Email" required></input>
                        <input type="password" name="password" placeholder="Password" id="pass" required></input >
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;
