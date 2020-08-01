import React from 'react';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {Box, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

function NewMessageModalHeader(props) {
    return (
        <Box borderBottom={1} style={{position: 'fixed', width: '90vw', maxWidth: 400, zIndex: 3, height: 50, backgroundColor: '#fff'}}>
            <Grid container justify="space-between" alignItems="center">
                <Grid item xs={2} style={{textAlign: 'left'}}>
                    <IconButton onClick={props.onClose}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={8}>
                    <Typography align='center'>
                        New Message
                    </Typography>
                </Grid>
                <Grid item xs={2} style={{textAlign: 'right'}} onClick={props.onClose}>
                    <Button color="primary">
                        Next
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default NewMessageModalHeader;
