import React, { Component } from 'react';
import { List } from './List';

const Favorites = props => {
    return <React.Fragment>
        <h1>Favorites Component!</h1>
        <List data={props.data}  onClick={props.click}/>
    </React.Fragment>
}

export { Favorites };
