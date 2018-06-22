

//vysetreni reducer

const poznamkyOddReducerDefaultState = [];

const poznamkyOddReducer = (state = poznamkyOddReducerDefaultState, {type, id, ...rest}) => {
    switch(type) {
        
        case "PRIDAT_POZNAMKUODD":
            return [...state, {id, ...rest}]
       
        default:
            
            return state;
    }
};

export default poznamkyOddReducer;