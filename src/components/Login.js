
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loginpic from '../images/login.jpg'


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            history("/");
            props.showAlert('Login Success', 'success')

        }
        else {
            props.showAlert('invalid credential', 'danger')
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='login-img' src={Loginpic} alt='Login Image'/>
                    </div>
                    <div className='col-md-6'>
                        <h2 className='login-title'>Login to continue Notebook On Cloud</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 signup-form">
                                <i class="fa fa-envelope"></i>
                                <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" placeholder='Your Email Address' />

                            </div>
                            <div className="mb-3 signup-form">
                            <i class="fa fa-unlock-alt"></i>
                                <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" placeholder='Password' />
                            </div>

                            <button type="submit" className="button4">Submit</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        
    )
}

export default Login