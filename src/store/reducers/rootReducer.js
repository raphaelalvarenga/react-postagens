const initialState = [
    {nome: "Raphael", idade: 30, nacionalidade: "Brasileiro"},
    {nome: "Solange", idade: 54, nacionalidade: "Brasileira"},
];

const rootReducer = (state = initialState, action) => {
    return state;
}

export default rootReducer;