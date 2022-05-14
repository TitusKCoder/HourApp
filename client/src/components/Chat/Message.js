import React from "react";
import { useQuery, gql } from '@apollo/client';

const GET_MESSAGES = gql`
query {
  messages {
    _id
    profileName
    text
  }
}
`

export default function Message ({profileName}) {
    const {data} = useQuery(GET_MESSAGES, {pollInterval: 1000});
    if (!data){
        return null;
    }
    return (
        <>
            {data.messages.map(({id, profileName: messageUser, text}) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: profileName === messageUser ? 'flex-end' : 'flex-start',
                    paddingBottom: "1em",
                }}
            >
            {profileName !== messageUser && (
                <div
                    style={{
                        height: 50,
                        width: 50,
                        marginRight: '0.5em',
                        border: '1px solid #091E05',
                        borderRadius: 25,
                        textAlign: 'center',
                        fontSize: '18pt',
                        paddingTop: 5,
                    }}
                >
                {messageUser.slice(0,2).toUpperCase()}
                </div>
            )}
            <div
                style={{
                    background: profileName === messageUser ? "#D8DAD3" : "#004F2D",
                    color: profileName === messageUser ? "black" : "white",
                    padding: '1em',
                    borderRadius: "1em",
                    maxWidth: "60%",
                }}>
                {text}
            </div>
        </div>

            ))}
        </>
    )
}