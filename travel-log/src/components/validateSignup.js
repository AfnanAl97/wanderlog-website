const validateSignup = (username, email, password) => {

    let errors={};

    if(!username){
        errors.username="Username is required."
    }
    if(!email){
        errors.email="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Email is invalid."
    }
    if(!password){
        errors.password="Password is required."
    }else if(password.length < 5){
        errors.password="Password must be more than four characters."
    }

    return errors.password || errors.username || errors.email? errors: null;
}

export default validateSignup;