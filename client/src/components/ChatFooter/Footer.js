import React from 'react';

import classes from './Footer.css';

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <p>
                © 2022 | Hour App | Created by The Oh Snap Team |{' '}
                <a
                    href="something@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Thank You!
                </a>
            </p>
        </footer>
    );
};

export default Footer;