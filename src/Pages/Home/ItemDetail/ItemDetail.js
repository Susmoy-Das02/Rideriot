import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    })


    return (
        <div>

            <div className="card" style={{ width: "38rem" }}>
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-title">Price: {item.price}</h6>
                    <h6 className="card-title">Quantity: {item.quantity}</h6>
                    <h6 className="card-title">Supplier name: {item.supplier}</h6>
                    <p className="card-text">{item.description}</p>


                </div>
            </div>



            <div className='text-center' >

                <button className='btn btn-primary'>elivered</button>
            </div>
        </div>
    );
};

export default ItemDetail;