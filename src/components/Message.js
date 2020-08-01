import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {connect} from "react-redux";

function Message(props) {
    return (
        <ListItem>
            <Grid
                spacing={1}
                container
                alignItems="center"
                direction={props.userId === props.selected.id ? "row" : "row-reverse"}
            >
                <Grid item>
                    <Avatar alt={props.user.name} src={props.user.avatar} />
                </Grid>
                <Grid item>
                    <Box borderRadius="borderRadius" style={{padding: "5px 15px", backgroundColor: props.userId === props.selected.id ? "#F8F8F8" : "#ccc"}}>
                        <ListItemText primary={props.message} />
                    </Box>
                </Grid>
            </Grid>
        </ListItem>
    );
}

const mapStateToProps = state => ({
    selected: state.MessagesReducer.selected
});

export default connect(mapStateToProps, null)(Message);
