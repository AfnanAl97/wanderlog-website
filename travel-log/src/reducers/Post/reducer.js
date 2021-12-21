const initialState = {
    post:{}
};

const postReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "ADD_POST":
            return {
                post: payload,
            };
        case "DELETE_POST":
            return {

            };
        default:
            return state;
    }
};

export default postReducer;