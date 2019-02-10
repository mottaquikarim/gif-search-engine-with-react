import React, { Component } from 'react';

import "./Tabs.css";

import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Tabs = props => {
    const {activeIndex, tabNames, onClick} = props;

    return <Nav tabs>
        {(tabNames || []).map((tabName, index) => {
            const className = index === activeIndex ? 
                "active" : 
                null;

            return <NavItem key={index}>
                <NavLink className={className}
                    onClick={e => onClick(index)}>
                    {tabName} 
                </NavLink>
            </NavItem>
        })}
    </Nav>
}

export {Tabs}
