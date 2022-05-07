import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    const {_id, name, img, price, quantity, description, supplier} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id =>{
        navigate(`/item/${id}`);
    }
   

    return (
        <div className=" g-5 col-sm-12 col-md-6 col-lg-4">

            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Price: {price}</h6>
                    <h6 className="card-title">Quantity: {quantity}</h6>
                    <h6 className="card-title">Supplier name: {supplier}</h6>
                    <p className="card-text">{description}</p>

                    <button onClick={() => navigateToItemDetail(_id)} className="btn btn-warning">Stock Update</button>
                   
                </div>
            </div>

        </div>
    );
};

export default Item;