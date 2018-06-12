

//vysetreni reducer

const vysetreniReducerDefaultState = [];

const vysetreniReducer = (state = vysetreniReducerDefaultState, action) => {
    switch(action.type) {
        case "PRIDAT_VYSETRENI":
            return [...state, action.vysetreni]
        case "EDITOVAT_VYSETRENI":
            return state.map((item) => {
                //pokud id prochazene polozky array odpovida tomu prichozimu z action objektu po zavolani dispatch tak se provedou upravy
                if (item.id === action.id) {
                    return {...item, ...action.updates}
                } else {
                    return item
                }
            });
        case "ODSTRANIT_VYSETRENI":
            return state.filter((item) => {
                return item.id !== action.id ;  //filtrem projdou polozky jejichz id se nerovna tomu z action objektu vyslaneho pres dispatch
            });

        case "VYCUCAT_VYSETRENI":
            return action.vysetreni;
        default:
            return state;
    }
};

export default vysetreniReducer;