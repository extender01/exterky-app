//filtrovaci reducer

const filtryReducerDefaultState = {
    text: "",
    razeni: "a"
};

const filtryReducer = (state = filtryReducerDefaultState, action) => {
    switch(action.type) {
        case "FILTROVAT_TEXT":
            return {...state, text: action.text};
        case "SERAZENI":
            return {...state, razeni: action.razeni}
        default:
            return state;
    }
};

export default filtryReducer;