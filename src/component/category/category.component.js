import React, { useEffect, useState } from 'react';
import './category.styles.scss';

import List from '../shared/list/list.component';
import Pagination from '../shared/pagination/pagination.component';

const Category = (props) => {

    const [list, setlist] = useState('');
    const [ showPerPage, setShowPerPage ] = useState(4);
    const [ pagination, setPagination ] = useState({
        start:0,
        end: showPerPage
    });

    const onPaginationChange = (start, end) => {
        setPagination({
            start: start,
            end: end
        })
    }

    useEffect(() => {
        const getList = async () => {
            try {
                const response = await fetch('https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop');
                const listJosn = await response.json();
                setlist(listJosn);
                return listJosn;
            } catch (err) {
                console.log('error');
            }
        }
        getList();
    });

    return (
        <div className="category-list">
            <div className="image-banner">
                <img src="https://pogo91-static.s3.amazonaws.com/media/banners/fl1.jpg" />
            </div>
            <ul className="cat-item">
                {
                    list && list.category.slice(pagination.start, pagination.end).map(item => (
                        <List key={item.id} item={item} />
                    ))
                }
            </ul>
            <Pagination 
                showPerPage={showPerPage} 
                onPaginationChange={onPaginationChange}
                total={list && list.category.length}
                 />
        </div>

    )
}

export default Category;
