import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Join.css';
// import ChatHeader from '../../components/ChatHeader/Header';
import ChatFooter from '../../components/ChatFooter/Footer';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className={classes.joinOuterContainer}>
            {/* <ChatHeader /> */}
            <div className={classes.joinInnerContainer}>
                <h1>
                    Meet With Your Mentor! Secure Chat for communication. Fill in the form
                    fields by entering the name and name of the room your mentor sent you, then click
                    the "SIGN IN" button. 
                </h1>
                <h3>Create Room or Login to the Сhat</h3>
                <div>
                    <input
                        placeholder="Enter Your Name"
                        className={classes.joinInput}
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder="Enter the Room Name"
                        className={classes.joinInput + ' ' + classes.mt20}
                        type="text"
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </div>
                <Link
                    onClick={(e) =>
                        !name || !room ? e.preventDefault() : null
                    }
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button
                        className={
                            classes.button +
                            ' ' +
                            classes.mt20 +
                            ' ' +
                            (!name || !room ? classes.disabled : '')
                        }
                        type="submit"
                    >
                        Sign In
                    </button>
                </Link>
            </div>
            <ChatFooter />
        </div>
    );
};

export default Join;