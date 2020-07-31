import { GET_MESSAGES } from "../ActionTypes";

const initialState = {
    messages: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES: {
            return {
                ...state.messages,
            };
        }
        default:
            return state;
    }
}
