import React, { Component } from 'react';

import {
    Col,
    Row,
} from 'reactstrap';

const List = props => {
    const {data} = props;
    return <Row>
        {data.map((item, index) => {
            return <Col key={index} sm="4" onClick={e => props.onClick(index)}>
                <img src={item} style={{width: '100%' }}/>
            </Col>
        })}
    </Row>
}

export { List };
