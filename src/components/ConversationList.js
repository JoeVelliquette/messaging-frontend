import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {selectConversation} from '../redux/actions/Actions';
import AvatarContainer from "./common/AvatarContainer";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

function ConversationList(props) {

    const conversations = props.conversations;
    const users = props.users;

    let result = conversations.map((c) => {
        let user = users.find(u => u.id === c.userId)
        if (user) {
            c.user = user;
        }
        return c;
    });

    const conversationsStartRef = useRef(null)

    const scrollToBottom = () => {
        conversationsStartRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [conversations]);

    return (
        <List disablePadding style={{height: 540, overflow: 'auto'}}>
            <div key='conversations-start' ref={conversationsStartRef} />
            {result.map(item => (
                <ListItem
                    button
                    key={item.id}
                    selected={props.selected && item.user.id === props.selected.id}
                    onClick={() => props.selectConversation(item.userId)}>
                    <ListItemAvatar>
                        <AvatarContainer users={[item.user]} marginRight={10}/>
                    </ListItemAvatar>
                    <ListItemText primary={item.user.name} secondary={item.lastMessage} />
                </ListItem>
            ))}
        </List>
    );
}

const mapStateToProps = state => ({
    conversations: state.MessagesReducer.conversations,
    selected: state.MessagesReducer.selected,
    users: state.MessagesReducer.users
});

export default connect(mapStateToProps, {selectConversation})(ConversationList);
