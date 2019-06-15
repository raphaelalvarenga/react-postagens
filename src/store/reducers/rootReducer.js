let initialState = {
    usuarios: [],
    posts: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CARREGAR_USUARIOS":
            state = {
                ...state,
                usuarios: action.usuarios
            }
            break;

        case "CARREGAR_POSTS":
            state = {
                ...state,
                posts: action.posts
            }
            break;

        default:
            break;
    }

    return state;
}

export default rootReducer;