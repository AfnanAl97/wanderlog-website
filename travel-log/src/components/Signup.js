import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../reducers/SignupLogin/action";
import validateSignup from "./validateSignup";
// import { login } from "../reducers/SignupLogin/action";


function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const [values, setValues] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    // });

    const [errors, setErrors] = useState({});

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    const handleRegister = () => {
        navigate("/")
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const validationResult = validateSignup(username, email,password)

        if(validationResult) {
            setErrors(validationResult);
        }
        else{

            const data = {
                "username": username,
                "email": email,
                "password": password,
                "role": "user"
            }

            axios 
              .post("http://localhost:8080/users", data)
              .then((res) => {
                  console.log(res.data);
                  const action = addUser(res.data);
                  dispatch(action);

                  navigate("/")
              })

              .catch((err) => {
                  console.log(err);
              });
        }
    }

    return (
    <>
    <div className="register-image"></div>
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
                        value={username.username}
                        onChange={handleUsername}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input 
                        className="input" 
                        type="email" 
                        name="email" 
                        value={email.email}
                        onChange={handleEmail}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input 
                        className="input" 
                        type="password" 
                        name="password" 
                        value={password.password}
                        onChange={handlePassword}
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
    </>
    )
}
export default Signup;