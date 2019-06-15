let initialState = {
    posts: []
};

const rootReducer = (state = initialState, action) => {
    if (action.type === "CARREGAR_POSTS") {
        state = {
            ...state,
            posts: action.posts
        }
    }

    return state;
}

export default rootReducer;