const validateLogin = (username, password) => {

    let errors={};

    if(!username){
        errors.username="Username is required."
    }
    // if(!email){
    //     errors.email="Email is required."
    // } else if(!/\S+@\S+\.\S+/.test(email)){
    //     errors.email="Email is invalid."
    // }
    if(!password){
        errors.password="Password is required."
    }else if(password.length < 5){
        errors.password="Password must be more than four characters."
    }

    return errors.password || errors.username? errors: null;
}

export default validateLogin;






// const validation = (values) => {

//     let errors={};

//     if(!values.username){
//         errors.username="Username is required."
//     }
//     if(!values.email){
//         errors.email="Email is required."
//     } else if(!/\S+@\S+\.\S+/.test(values.email)){
//         errors.email="Email is invalid."
//     }
//     if(!values.password){
//         errors.password="Password is required."
//     }else if(values.password.length < 5){
//         errors.password="Password must be more than four characters."
//     }

//     return errors;
// }

// export default validation;