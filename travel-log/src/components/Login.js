import React, { useState } from "react";
import validation from "./validation";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { login } from "../reducers/SignupLogin/action";
// import { useDispatch } from "react-redux";

function Login() {

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [values, setValues] = useState({
        username: "",
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
        navigate("/signup")
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(values.username === "" || values.password === "") {
            setErrors(validation(values));}
        else{
           navigate("/experience")}
    }

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Login</h2>
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
                            LOGIN
                        </button>
                        <p className="message">
                            Not registered? <a onClick={handleRegister}>Create an account</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;