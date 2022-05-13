import {React, useState} from "react";
import {Container, Row, Col, FormControl, FormGroup, Button, Input} from "react-bootstrap";
import Message from "./Message";
import { useMutation, gql } from "@apollo/client";

const POST_MESSAGE= gql`
mutation($profileName: String!, $text: String!) {
    postMessage(profileName: $profileName, text: $text) {
      profileName
      text
    }
  }`

  export default function Chat () {
    const [state, setState] = useState({
        profileName: 'jack',
        text: '',
    })
    const [postMessage] = useMutation(POST_MESSAGE);

    const onSend = () => {
        console.log(state);
        if(state.text.length > 0) {
            console.log('we here');
            postMessage({
                variables: state
            });
        }
        console.log('we there')
        setState({
            ...state,
            content: '',
        });
    };
    return (
        
        <Container>
            <Message profileName={state.profileName}/>
            <Row>
                <Col xs={2} style={{padding: 0}}>
                    <input
                    label="Name"
                    value={state.profileName}
                    onChange= {(e) => setState({
                        ...state,
                        profileName: e.target.value,
                    })}/>
                </Col>
                <Col xs={8} >
                    <input
                    label="Text"
                    value={state.text}
                    onChange= {(e) => setState({
                        ...state,
                        text: e.target.value,
                    })}
                    // onKeyUp={(e) => {
                    //     if (e.key === 'Enter'){
                    //         onSend()
                    //     }
                    // }}
                    />
                </Col>
                <Col xs={2} style={{padding: 0}} >
                    <Button onClick={() => onSend()}>
                    Send Message
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}