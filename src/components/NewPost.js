import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { now } from '@celo/contractkit/lib/identity/claims/types';

function NewPost(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let textInput = React.createRef();
    const postHandler = () => {
        if(textInput.current.value.trim()){
            handleClose();
            let newMsg = {
                user: props.currentUser,
                text: textInput.current.value.trim(),
                date : new Date().toLocaleDateString('en-US') + " " + new Date().toLocaleTimeString('en-US')
            };

            props.onPost(newMsg);
        }
    }
    
    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                Create a new post   <FontAwesomeIcon icon={faPenToSquare} />
            </Button>

            <Offcanvas style={{height: '300px'}} placement="bottom" show={show} onHide={handleClose}>
                <Container>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>New post</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={textInput} style={{ height: "100px", resize: "none" }} as="textarea" />
                            <Form.Text className="text-muted">
                                You are writing as {props.user.user}.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" onClick={postHandler}>
                            Share
                        </Button>
                    </Form>
                </Offcanvas.Body>
                </Container>
            </Offcanvas>
        </>
    );
}

export default NewPost;