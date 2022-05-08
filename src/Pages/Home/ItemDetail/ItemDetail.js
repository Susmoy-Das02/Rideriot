import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://hidden-tor-69572.herokuapp.com/item/${itemId}`;

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

                <button className='btn btn-primary'>Delivered</button>
            </div>

            <div class="input-group mb-3 mt-3">
                <input type="number" class="form-control" placeholder="Enter number"/>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Restock</button>
            </div>


        </div>
    );
};

export default ItemDetail;