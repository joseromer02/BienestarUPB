import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Login(){
    const [values, setValues] = useState({
        codigo: '',
        password: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.codigo === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                } else {
                    alert("Codigo o Contraseña Incorrecto");
                }
            })
            .catch(err => console.log(err));
        }
    };

    return(
        <div className='d-flex justify-content-center align-items-center bg-warning vh-100'>
            <div className='bg-white p-4 rounded w-50'>
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='codigo'><strong>Codigo</strong></label>
                        <input type='number' placeholder='Enter Codigo' name='codigo' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.codigo && <span className='text-danger'>{errors.codigo}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className="form-label"><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-warning w-100 rounded-0 mb-3'>Login</button>
                    <div className="d-grid gap-2">
                        <Link to="/Signup" className='btn btn-default border bg-light rounded-0 text-decoration-none'>Create Account</Link>
                    </div>
                </form>
            </div>
        </div>  
    );
}

export default Login;


/*import React, { useState } from  'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios'


function Login(){
    const [values, setValues] = useState({
        codigo: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))
        if(errors.codigo === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                }else {
                    alert("Codigo o Contrasena Incorrecto")
                }
            })
            .catch(err => console.log(err));
        }
    }

    return(

        <div className='d-flex justify-content-center align-items-center bg-warning vh-100'>
            <div className='bg-white p-4 rounded w-50'>
            <h2>Login</h2>

                <form action="" onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label htmlFor='codigo'><strong>Codigo</strong></label>
                        <input type='number' placeholder='Enter Codigo' name='codigo' 
                         onChange={handleInput} className='form-control rounded-0'/>
                        {errors.codigo && <span className='text-danger'> {errors.codigo}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password' className="form-label"><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                        <button type='submit' className='btn btn-warning w-100 rounded-0 mb-3'>Login</button>
                        <div className="d-grid gap-2">
                        <Link to="/Signup" className='btn btn-default border bg-light rounded-0 text-decoration-none'>Create Account</Link>
                    </div>
                </form>
            </div>
        </div>  
    )
}

export default Login 
*/