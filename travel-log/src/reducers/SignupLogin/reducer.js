const initialState = {}

const usersReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "SIGN_UP":
            return {
                
            };
        case "LOG_IN":
            return {

            };
        default:
            return state;
    }
};

export default usersReducer;