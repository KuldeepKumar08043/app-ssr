import React from 'react';
import './list.styles.scss';

const List = ({ item }) => {
    return (
        <li className="list-items">
            <div className="image"><img src={item.image} /></div>
            <h4 className="name">{ item.name }</h4>
        </li>
    )
}

export default List;