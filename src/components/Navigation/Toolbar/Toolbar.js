import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <head className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </head>
);

export default toolbar;