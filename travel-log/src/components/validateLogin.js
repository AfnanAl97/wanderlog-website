const validateLogin = (username, password) => {

    let errors={};

    if(!username){
        errors.username="Username is required."
    }
    if(!password){
        errors.password="Password is required."
    }else if(password.length < 5){
        errors.password="Password must be more than four characters."
    }

    return errors.password || errors.username? errors: null;
}

export default validateLogin;
