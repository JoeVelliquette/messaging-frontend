import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Box, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {connect} from "react-redux";
import {StyledBadge} from "./StyledBadge";

function ConversationBoxHeader(props) {
    return (
        <Box borderBottom={1}>
            <Grid container justify="space-between" alignItems="center" style={{height: 60, padding: '0 10px'}}>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
                            {props.selected.active ?
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar alt={props.selected.name} src={props.selected.avatar} />
                                </StyledBadge>
                                :
                                <Avatar alt={props.selected.name} src={props.selected.avatar} />
                            }
                        </Grid>
                        <Grid item>
                            <Typography color='textPrimary'>
                                {props.selected.name}
                            </Typography>
                            <Typography color='textPrimary' variant='subtitle2'>
                                {props.selected.active ? "Online" : "Offline"}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{textAlign: 'right'}}>
                    <IconButton>
                        <InfoOutlinedIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}

const mapStateToProps = state => ({
    selected: state.MessagesReducer.selected
});

export default connect(mapStateToProps, null)(ConversationBoxHeader);
