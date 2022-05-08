import React from 'react';
import useItem from '../../hooks/UseItem';

const ManageItems = () => {
    const [items, setItems] = useItem();

    const handleDelete = id => {
        const proceed = window.confirm('Aru you sure?');
        if (proceed) {
            const url = `https://hidden-tor-69572.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining)
                })

        }
    }

    return (
        <div className='w-50 mx-auto card' style={{ width: "18rem" }} >
            <h2>Manage your item</h2>
            {
                items.map(item => <div key={item._id} >

                        <img src={item.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="card-title">Price: {item.price}</h6>
                            <h6 className="card-title">Quantity: {item.quantity}</h6>
                            <h6 className="card-title">Supplier name: {item.supplier}</h6>
                            <p className="card-text">{item.description}</p>

                            <button onClick={() => handleDelete(item._id)}>Delate item</button>




                        </div>

                    </div>)
            }
                </div>
                );
};

            export default ManageItems;