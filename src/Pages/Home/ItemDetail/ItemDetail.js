import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [restock, setRestock] = useState('');

    useEffect(() => {
        const url = `https://hidden-tor-69572.herokuapp.com/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    })

    const changeRestock = (e) => {
        const value = e.target.value
        if (value < 0) {
            alert("Negative value not accept");
        }
        else {
            setRestock(value);
            
        }

    }



    const handleRestock = async (id) => {
        const updateQuantity = { quantity: parseInt(item.quantity) + parseInt(restock)}


        try {
            const { data } = await axios.patch(`https://hidden-tor-69572.herokuapp.com/update/${id}`, JSON.stringify(updateQuantity), { headers: { 'Content-Type': 'application/json' } });

            if (data) {
                alert("Restock successfully")
            }

        }
        catch (error) {
            console.log(error.message)

        }

    }


    const handleDelivered = async (id) => {
        if (item.quantity > 0) {
            const updateQuantity = { quantity: parseInt(item.quantity) - 1 }


            try {
                const { data } = await axios.patch(`http://localhost:5000/update/${id}`, JSON.stringify(updateQuantity), { headers: { 'Content-Type': 'application/json' } });

                if (data) {
                    alert("delivered successfully")
                }

            }
            catch (error) {
                console.log(error.message)

            }



        }

        else {
            alert('Please restock item');
        }



    }


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

                <button onClick={() => handleDelivered(item._id)} className='btn btn-primary'>Delivered</button>
            </div>

            <div class="input-group mb-3 mt-3">
                <input onChange={(e) => changeRestock(e)} type="number" class="form-control" placeholder="Enter number" />
                <button onClick={() => handleRestock(item._id)} class="btn btn-outline-secondary" type="button" id="button-addon2">Restock</button>
            </div>


        </div>
    );
};

export default ItemDetail;