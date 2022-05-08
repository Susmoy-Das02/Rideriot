import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])


    return (
        <div id='items' className='container'>
            <h1 className='text-dark text-center mt-5'>Our Items</h1>
            <div className='row'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <Link className='d-flex justify-content-center text-decoration-none' to='/manage'>
                <button className="btn btn-info mt-3 mb-3">Manage inventory</button>

            </Link>

        </div>






    );
};

export default Items;