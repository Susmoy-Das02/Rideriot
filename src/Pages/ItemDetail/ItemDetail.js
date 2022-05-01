import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const {itemId} = useParams()
    return (
        <div>
            <h2>welcome too details : {itemId} </h2>
        </div>
    );
};

export default ItemDetail;
