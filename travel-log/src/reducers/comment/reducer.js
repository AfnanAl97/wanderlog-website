const initialState = {
    comment:{}
}

const commentReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "ADD_COMMENT":
            return {
                comment: payload,
            };
        case "DELETE_COMMENT":
            return {

            };
        default:
            return state;
    }
};

export default commentReducer;