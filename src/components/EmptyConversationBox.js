import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Box, Typography} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import {useVisibilityToggle} from "../hooks/Hooks";
import NewMessageModal from "./newMessageModal/NewMessageModal";

function EmptyConversationBox(props) {
    const [isVisible, toggleVisibility] = useVisibilityToggle(false);

    return (
        <>
            <Grid
                style={{height: '100%'}}
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}>
                <Grid item>
                    <Box border={1} borderRadius="50%" style={{width: 125, height: 125}}>
                        <Grid
                            style={{height: '100%'}}
                            container
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <Grid item>
                                <SendIcon style={{fontSize: 60, transform: 'rotate(-25deg)'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h6" align="center">
                        Your Messages
                    </Typography>
                    <Typography color="textSecondary" variant="body2" align="center">
                        Send private photos and messages to a friend or group.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={toggleVisibility}>
                        Send Message
                    </Button>
                </Grid>
            </Grid>
            <NewMessageModal visible={isVisible} onClose={toggleVisibility}/>
        </>
    );
}

export default EmptyConversationBox;
