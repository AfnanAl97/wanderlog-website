import React, { useState } from "react";
import validateLogin from "./validateLogin";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, addToken } from "../reducers/SignupLogin/action";
import axios from "axios";
import { useDispatch } from "react-redux";
import jwt_decoded from "jwt-decode";
// import { login } from "../reducers/SignupLogin/action";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const [values, setValues] = useState({
    //     username: "",
    //     password: "",
    // });

    const [errors, setErrors] = useState({});

    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    const handleUsername = (event) => {
        setUsername(event.target.value);
        // setUserName({
        //     ...userName,
        //     [event.target.name]: event.target.value,
        // });
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
        // setPassword({
        //     ...Password,
        //     [event.target.name]: event.target.value,
        // });
    };

    const handleRegister = () => {
        navigate("/signup")
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const validationResult = validateLogin(username, password)

        if(validationResult) {
            setErrors(validationResult);
        }
        else{ 

        const data = {
            "username": username,
            "password": password
        }

        // const data = {
        //     "username": values,
        //     "password": values
        // }

        axios
         .post("http://localhost:8080/login", data)
         .then((res) => {
             console.log(res.data);
             const token = res.data.access_token;

             const decoded = jwt_decoded(token);
             console.log(decoded);

             const user_action = addUser({
                 id: decoded.id,
                 userName: decoded.sub
             });

             const token_action = addToken(token);

             dispatch(user_action);
             dispatch(token_action);
             console.log(user_action);

             navigate("/experience")

         })

         .catch((err) => {
             console.log(err);
         });

         }
         
        // if(userName.username === "" || Password.password === "") {
        //     setErrors(validation(userName));
        //     setErrors(validation(Password));}
        // else if(Password.password.length < 5){
        //     setErrors(validation(Password));
        // }
        // else{
        //    navigate("/experience")}

        // --------------------------------------------------------------------------

            // if(values.username === "" || values.password === "") {
            //     setErrors(validation(values));}
            // else if(values.password.length < 5){
            //     setErrors(validation(values));
            // }
            // else{
            //    navigate("/experience")}
    }

    return (
    <>
     <div className="register-image"></div>
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
                        // value={values.username}
                        // onChange={handleChange}
                        value={username.username}
                        onChange={handleUsername}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>

                    <div className="password">
                        <label className="label">Password</label>
                        <input 
                        className="input" 
                        type="password" 
                        name="password" 
                        // value={values.password}
                        // onChange={handleChange}
                        value={password.password}
                        onChange={handlePassword}
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
    </>
    )
}
export default Login;