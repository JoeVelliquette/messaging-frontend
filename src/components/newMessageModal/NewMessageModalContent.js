import React from 'react';
import {connect} from "react-redux";
import {createNewConversation} from "../../redux/actions/Actions";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {StyledBadge} from "../common/StyledBadge";
import {Box} from "@material-ui/core";

function NewMessageModalContent(props) {
    return (
        <Box style={{marginTop: 100, zIndex: 1}}>
            <List dense>
                {props.users.map((item) => {
                    return (
                        <ListItem key={item.id} button>
                            <ListItemAvatar>
                                {item.active ?
                                    <StyledBadge
                                        overlap="circle"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        variant="dot"
                                    >
                                        <Avatar alt={item.name} src={item.avatar} />
                                    </StyledBadge>
                                    :
                                    <Avatar alt={item.name} src={item.avatar} />
                                }
                            </ListItemAvatar>
                            <ListItemText primary={item.name} />
                            <ListItemSecondaryAction>
                                <Checkbox
                                    edge="end"
                                    value={item.id}
                                    onChange={() => props.createNewConversation(item.id)}
                                    inputProps={{ 'aria-labelledby': item.id }}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}

const mapStateToProps = state => ({
    users: state.MessagesReducer.users
});

export default connect(mapStateToProps, {createNewConversation})(NewMessageModalContent);
