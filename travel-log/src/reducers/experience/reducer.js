const initialState={
    experience:{}
}

const experienceReducer=(state=initialState, {type, payload}) => {
    switch(type) {
        case "ADD_EXPERIENCE":
            console.log(payload);
            return {
                experience:payload
            }

        case "DELETE_EXPERIENCE":
            return{
                experience:{}
            }

        default:
            return state;
    }
}

export default experienceReducer;