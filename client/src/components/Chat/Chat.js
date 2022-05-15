import {React, useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import Message from "./Message";
import { useMutation, gql } from "@apollo/client";
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE} from '../../utils/queries';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";





const POST_MESSAGE= gql`
mutation($profileName: String!, $text: String!) {
    postMessage(profileName: $profileName, text: $text) {
      profileName
      text
    }
  }`

  export default function Chat () {
    const userID = localStorage.getItem('uuid');
    console.log('userID', userID);
    const {data, loading, error} = useQuery(QUERY_PROFILE, {variables: {userID}});
    const [state, setState] = useState({
        profileName: '',
        text: '',
    })
    const [postMessage] = useMutation(POST_MESSAGE);

    const onSend = () => {
        console.log(state);
        if(state.text.length > 0) {
            postMessage({
                variables: state
            });
        }
        setState({
            ...state,
            text: '',
        });
    };
    return (
        <Container>
        
        {Auth.loggedIn() ? (
            <Container style={{
                border: '3px solid #091E05',
                boxShadow:' 6px 5px 5px #091E05'}
            }>
                    <Message profileName={state.profileName}/>
                    <Container style={{
                        border: '2px solid #091E05'
                    }}>
                    <Row>
                        <Col xs={2} style={{padding: 0}}>
                            {console.log('iNNnred==>>', data)}
                            <input
                            label="Name"
                            disabled={data?.profile?.name}
                            value={state.profileName || data?.profile?.name}
                            onChange= {(e) => setState({
                                ...state,
                                profileName: e.target.value,
                            })}/>
                        </Col>
                        <Col xs={7} >
                            <input style={{
                                width: '90%',
                                borderRadius: '25px',
                                boxShadow: '2px 2px 2px black'
                            }}
                            placeholder="Enter Message Here"
                            label="Text"
                            value={state.text}
                            onChange= {(e) => setState({
                                ...state,
                                text: e.target.value,
                            })}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter'){
                                    onSend()
                                }
                            }}
                            />
                        </Col>
                        <Col xs={3} style={{padding: 0}} >
                            <Button style={{
                                backgroundColor: "#A4C2A5"
                            }} onClick={() => onSend()}>
                            Send Message
                            </Button>
                        </Col>
                    </Row>
                    </Container>
            </Container>
        ) : (
            <p>
                You need to be logged in to view the Timesquare. Please{' '}
                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
        )}
        </Container>
    )
}



