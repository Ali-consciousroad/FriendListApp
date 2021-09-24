import React from 'react';
// To use css module we need to import something
import classes from './Card.module.css';

const Card = (props) => {
    // props.children allows to access the content from the Card component inside the AddUser component
    // Allow any class applied on the card component inside the AddUser comp. to be applied here
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card; 