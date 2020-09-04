import React, { useState, useEffect } from 'react';
import './pagination.styles.scss';

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [ counter, setCunter ] = useState(1);

    const onButtonClick = (type) => {
        if(type === 'prev') {
            if(counter === 1){
                setCunter(1);
            }else {
                setCunter(counter - 1);
            }
        }else if( type === 'next' ) {
            if(Math.ceil(total/showPerPage) === counter){
                setCunter(counter);
            }else {
                setCunter(counter + 1);
            }
        }
    }

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
    }, [counter]);

    return (
        <div className="buttonWrapper">
            <button className="pbutton" onClick={() => onButtonClick('prev')}>Previous</button>
            <button className="pbutton" onClick={() => onButtonClick('next')}>Next</button>
        </div>
    )
}

export default Pagination;