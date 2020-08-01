import React, { useEffect, useRef } from 'react';
import {connect} from "react-redux";
import List from "@material-ui/core/List";
import ConversationBoxHeader from "./ConversationBoxHeader";
import ConversationTextBox from "./ConversationTextBox";
import Message from "./Message";

function ConversationBox(props) {

    const messages = props.messages;

    let result = messages.map((m) => {
        if (props.selected.id === m.userId) {
            m.user = props.selected;
        } else {
            m.user = props.currentUser
        }
        return m;
    });

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    return (
        <>
            <ConversationBoxHeader/>
            <List disablePadding style={{height: 470, overflow: 'auto'}}>
                {result.map(item => <Message key={item.id} {...item}/>)}
                <div key='messages-end' ref={messagesEndRef} />
            </List>
            <ConversationTextBox/>
        </>
    );
}

const mapStateToProps = state => ({
    messages: state.MessagesReducer.messages,
    selected: state.MessagesReducer.selected,
    currentUser: state.MessagesReducer.currentUser
});

export default connect(mapStateToProps, null)(ConversationBox);
