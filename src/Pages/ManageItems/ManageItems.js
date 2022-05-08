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

        <div className='table-responsive px-5 py-5'>
            <table className="table table-sm table-light table-striped table-hover">
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, i) => (
                            <tr key={item._id}>
                                <td className='text-center'>{i+1}</td>

                                <td className='text-center'><img  src={item.img} style={{width:"20%", height:"20%", borderRadius:"50%"}}  alt="" /></td>
                                <td className='text-center'>{item.name}</td>
                                <td className='text-center'>{item.price}</td>
                                <td className='text-center'>{item.quantity}</td>
                                <td className='text-center'>{item.description}</td>
                                <td><button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delate item</button></td>
                            </tr>

                        ))


                    }
                </tbody>
            </table>

        </div>


    );
};

export default ManageItems;