import React from 'react';
import Modal from '@material-ui/core/Modal';
import Container from '@material-ui/core/Container';
import NewMessageModalHeader from "./NewMessageModalHeader";
import NewMessageModalContent from "./NewMessageModalContent";
import NewMessageModalTextBox from "./NewMessageModalTextBox";

function NewMessageModal(props) {
    return (
        <Modal
            open={props.visible}
            onClose={props.onClose}
            closeAfterTransition
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        >
            <Container disableGutters style={{outline: 0, width: '90vw', maxWidth: 400, height: 450, backgroundColor: '#fff', overflow: 'auto'}}>
                <NewMessageModalHeader onClose={props.onClose}/>
                <NewMessageModalTextBox/>
                <NewMessageModalContent/>
            </Container>
        </Modal>
    );
}

export default NewMessageModal;
