import React from 'react';
import sandwichLogo from '../../assets/images/127 burger-logo.png';
import classes from './Logo.css';
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={sandwichLogo} alt="MySadwich"/>
    </div>
);
 
export default logo;