import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {Box} from "@material-ui/core";

function NewMessageModalTextBox(props) {
    const [value, setValue] = useState('');

    return (
        <Box style={{position: 'fixed', width: '90vw', maxWidth: 400, zIndex: 2, height: 50, marginTop: 50, backgroundColor: '#fff'}}>
            <Box style={{padding: 10}}>
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={(event) => {
                        event.preventDefault();
                        alert(value)
                        setValue('');
                    }}
                >
                    <TextField
                        fullWidth
                        autoFocus
                        id="outlined-basic"
                        placeholder="Search for recipients..."
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                </form>
            </Box>
        </Box>
    );
}

export default NewMessageModalTextBox;
