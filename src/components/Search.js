import React, { Component } from 'react';

import { List } from './List';

const Search = props => {
    return <React.Fragment>
        <h1>Search Component!</h1>
        <List data={props.data} onClick={props.click} />
    </React.Fragment>
}

export { Search };
