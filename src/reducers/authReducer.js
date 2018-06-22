
export default (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                uid: action.email
            };
        case "LOGOUT":
            return {};
            
        default:
            return state;
    }
};