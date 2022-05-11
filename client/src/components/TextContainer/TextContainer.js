import React from 'react';

// import onlineIcon from '../../utils/';

import classes from './TextContainerStyle.css';

const TextContainer = ({ users }) => (
    <div className={classes.textContainer}>
        {users ? (
            <div>
                <h1>list of users in the room:</h1>
                <div className={classes.activeContainer}>
                    <h2>
                        {users.map(({ name }) => (
                            <div key={name} className={classes.activeItem}>
                                {/* <img alt="Online Icon" src={onlineIcon} /> */}
                                {name}
                            </div>
                        ))}
                    </h2>
                </div>
            </div>
        ) : null}
    </div>
);

export default TextContainer;