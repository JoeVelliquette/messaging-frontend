import {
    GET_CONVERSATIONS,
    SELECT_CONVERSATION,
    GET_MESSAGES,
    SEND_MESSAGE,
    CREATE_NEW_CONVERSATION
} from "../ActionTypes";

const initialState = {
    currentUser: {id: 1, active: false, name: "Nick Velliquette", avatar: "https://pbs.twimg.com/profile_images/1232913461753061379/7RL2RNjm_400x400.jpg"},
    selected: null,
    conversations: [
        {id: 2, lastMessage: 'Whats up, dude', userId: 2},
        {id: 3, lastMessage: 'Whats up, dude', userId: 3},
        {id: 4, lastMessage: 'Whats up, dude', userId: 4},
        {id: 5, lastMessage: 'Whats up, dude', userId: 5},
        {id: 6, lastMessage: 'Whats up, dude', userId: 6},
        {id: 7, lastMessage: 'Whats up, dude', userId: 7},
        {id: 8, lastMessage: 'Whats up, dude', userId: 8},
        {id: 9, lastMessage: 'Whats up, dude', userId: 9},
        {id: 10, lastMessage: 'Whats up, dude', userId: 10},
    ],
    messages: [
        {id: 2, message: "What's up.", sentAt: "3:45 pm", userId: 2},
        {id: 3, message: "Nothin much, you?", sentAt: "3:45 pm", userId: 1},
        {id: 4, message: "Just working.", sentAt: "3:45 pm", userId: 1},
        {id: 5, message: "Same. Wanna grab beers after?", sentAt: "3:45 pm", userId: 2},
        {id: 6, message: "Yes. Where?", sentAt: "3:45 pm", userId: 1},
        {id: 7, message: "Idk, what's open?", sentAt: "3:45 pm", userId: 2},
        {id: 8, message: "lol", sentAt: "3:45 pm", userId: 1},
        {id: 9, message: "Nothing, we're in quarentine", sentAt: "3:45 pm", userId: 1},
        {id: 10, message: "Beers at my pool?", sentAt: "3:45 pm", userId: 2},
        {id: 11, message: "Hell. Yes.", sentAt: "3:45 pm", userId: 1},
    ],
    users: [
        {id: 2, active: true, name: "John Velliquette", avatar: "https://pbs.twimg.com/profile_images/1256769102082908160/5B8LBy1p_400x400.jpg"},
        {id: 3, active: true, name: "Joseph Velliquette", avatar: "https://pbs.twimg.com/profile_images/1256769102082908160/5B8LBy1p_400x400.jpg"},
        {id: 4, active: true, name: "Jon Velliquette", avatar: "https://pbs.twimg.com/profile_images/1256769102082908160/5B8LBy1p_400x400.jpg"},
        {id: 5, active: false, name: "Jack Velliquette", avatar: "https://pbs.twimg.com/profile_images/1256769102082908160/5B8LBy1p_400x400.jpg"},
        {id: 6, active: true, name: "Jim Velliquette", avatar: "https://pbs.twimg.com/profile_images/1256769102082908160/5B8LBy1p_400x400.jpg"},
        {id: 7, active: true, name: "Jimmy Velliquette", avatar: "https://pbs.twimg.com/profile_images/1256769102082908160/5B8LBy1p_400x400.jpg"},
        {id: 8, active: false, name: "Jordan Velliquette", avatar: "https://pbs.twimg.com/profile_images/1256769102082908160/5B8LBy1p_400x400.jpg"},
        {id: 9, active: true, name: "Jalen Velliquette", avatar: "https://pbs.twimg.com/profile_images/1256769102082908160/5B8LBy1p_400x400.jpg"},
        {id: 10, active: false, name: "Jay Velliquette", avatar: "https://pbs.twimg.com/profile_images/1256769102082908160/5B8LBy1p_400x400.jpg"},
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CONVERSATIONS:
            return {
                ...state,
                conversations: state.conversations,
            };
        case SELECT_CONVERSATION:
            let index = state.users.findIndex(obj => obj.id === action.payload);
            return {
                ...state,
                selected: state.users[index],
            };
        case CREATE_NEW_CONVERSATION:
            state.conversations.forEach(function(obj,index){
                if (obj.userId === action.payload){
                    state.conversations.splice(index, 1);
                    state.conversations.unshift(obj);
                }
            })
            return {
                ...state,
                selected: state.users[state.users.findIndex(obj => obj.id === action.payload)],
                conversations: state.conversations
            };
        case GET_MESSAGES:
            return {
                ...state,
                messages: state.messages
            };
        case SEND_MESSAGE:
            let length = state.messages.length + 1;
            return {
                ...state,
                messages: [...state.messages, {id: length, message: action.payload, sentAt: "3:45 pm"}]
            };
        default:
            return state;
    }
}
