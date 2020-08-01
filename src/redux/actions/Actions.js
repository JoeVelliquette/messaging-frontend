import {
    GET_CONVERSATIONS,
    SELECT_CONVERSATION,
    GET_MESSAGES,
    SEND_MESSAGE,
    CREATE_NEW_CONVERSATION
} from "../ActionTypes";


export const getMessages = () => dispatch => {
    dispatch({
        type: GET_CONVERSATIONS,
        payload: null
    });
};

export const selectConversation = (userId)  => dispatch => {
    dispatch({
        type: SELECT_CONVERSATION,
        payload: userId
    });
};

export const createNewConversation = (userId)  => dispatch => {
    dispatch({
        type: CREATE_NEW_CONVERSATION,
        payload: userId
    });
};

export const sendMessage = (message)  => dispatch => {
    dispatch({
        type: SEND_MESSAGE,
        payload: message
    });
};
