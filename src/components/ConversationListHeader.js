import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Box, Typography} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import NewMessageModal from "./newMessageModal/NewMessageModal";
import {useVisibilityToggle} from "../hooks/Hooks";

function ConversationListHeader(props) {
    const [isVisible, toggleVisibility] = useVisibilityToggle(false);

    return (
        <>
            <Box borderBottom={1}>
                <Grid container justify="space-between" alignItems="center" style={{height: 60, padding: '0 10px'}}>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <Typography align='center' variant='h6'>
                            Direct
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{textAlign: 'right'}}>
                        <IconButton onClick={toggleVisibility}>
                            <CreateIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
            <NewMessageModal visible={isVisible} onClose={toggleVisibility}/>
        </>
    );
}

export default ConversationListHeader;
