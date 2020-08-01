import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Box} from "@material-ui/core";
import {sendMessage} from '../redux/actions/Actions'
import {connect} from "react-redux";

function ConversationTextBox(props) {
    const [value, setValue] = useState('');

    return (
        <Box style={{padding: 15}}>
            <form
                noValidate
                autoComplete="off"
                onSubmit={(event) => {
                    event.preventDefault();
                    props.sendMessage(value);
                    setValue('');
                }}
            >
                <TextField
                    fullWidth
                    autoFocus
                    size="small"
                    id="outlined-basic"
                    placeholder="Message..."
                    variant="outlined"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </form>
        </Box>
    );
}


export default connect(null, {sendMessage})(ConversationTextBox);
