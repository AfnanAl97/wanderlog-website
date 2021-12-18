export const signup = (user) => {
    return {
        type: "SIGN_UP",
        payload: user,
    };
};

export const login = (user) => {
    return {
        type: "LOG_IN",
        payload: user,
    };
};