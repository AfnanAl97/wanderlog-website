const initialState = {}

const postReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "ADD_POST":
            return {
                
            };
        case "DELETE_POST":
            return {

            };
        default:
            return state;
    }
};

export default postReducer;