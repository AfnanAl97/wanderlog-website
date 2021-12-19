const initialState = {}

const commentReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "ADD_COMMENT":
            return {
                
            };
        case "DELETE_COMMENT":
            return {

            };
        default:
            return state;
    }
};

export default commentReducer;