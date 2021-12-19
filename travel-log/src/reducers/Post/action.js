export const addPost = (post) => {
    return {
        type: "ADD_POST",
        payload: post,
    };
};

export const deletePost = (post) => {
    return {
        type: "DELETE_POST",
        payload: post,
    };
};