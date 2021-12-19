export const addComment = (comment) => {
    return {
        type: "ADD_COMMENT",
        payload: comment,
    };
};

export const deleteComment = (comment) => {
    return {
        type: "DELETE_COMMENT",
        payload: comment,
    };
};