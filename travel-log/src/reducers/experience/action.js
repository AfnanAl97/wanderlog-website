export const addExperience=(experience) => {
    return {
        type: "ADD_EXPERIENCE",
        payload: experience
    }
}

export const deleteExperience=(experience) => {
    return {
        type: "DELETE_EXPERIENCE",
        payload: experience
    }
}