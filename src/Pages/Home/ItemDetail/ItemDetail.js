import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const {itemId} = useParams();
    const [item, setItem] = useState({});
    
    useEffect( () =>{
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    })


    return (
        <div>
            <h2>{item.name}</h2>
            <div className='text-center' >
            <Link to='/manageitem'>
                <button className='btn btn-primary'>Manage Items</button>
            </Link>
            </div>
        </div>
    );
};

export default ItemDetail;