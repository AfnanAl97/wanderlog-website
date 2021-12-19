import React, { useState } from "react";
import validation from "./validation";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { login } from "../reducers/SignupLogin/action";
// import { useDispatch } from "react-redux";

function Signup() {

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleRegister = () => {
        navigate("/")
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(values.username === "" || values.email === "" || values.password === "") {
            setErrors(validation(values));}
        else if(values.password.length < 5){
            setErrors(validation(values));
        }
        else if(!/\S+@\S+\.\S+/.test(values.email)){
            setErrors(validation(values));
        }
        else{
        navigate("/experience")}
    }

    return (
        <div className="container">
            <div className="app-wrapper2">
                <div>
                    <h2 className="title">Sign Up</h2>
                </div>
                <form className="form-wrapper">
                    <div className="username">
                        <label className="label">Username</label>
                        <input 
                        className="input" 
                        type="text" 
                        name="username" 
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input 
                        className="input" 
                        type="email" 
                        name="email" 
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input 
                        className="input" 
                        type="password" 
                        name="password" 
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>
                            SIGN UP
                        </button>
                        <p className="message2">
                            Already have account? <a onClick={handleRegister}>Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup;