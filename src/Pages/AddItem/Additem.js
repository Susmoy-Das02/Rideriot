import React from 'react';
import { useForm } from "react-hook-form";

const Additem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
         console.log(data);
         const url = `https://hidden-tor-69572.herokuapp.com/item`;
         fetch(url, {
             method:'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(result =>{

             alert("Your item added successfully");
             reset();
         })
        };
    return (
        <div className='w-50 mx-auto' >
            <h2>Please add a item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

            <input className='mb-2'  placeholder='Photo URL' type="text" {...register("img")} />


                <input className='mb-2' placeholder='Name' {...register("name")} />
                <input className='mb-2'  placeholder='Price' type="number" {...register("price")} />

                <input className='mb-2'  placeholder='Quantity' type="number" {...register("quantity")} />

                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />

                <textarea className='mb-2'  placeholder='Description' {...register("description")} />
                <input className='mb-5' type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default Additem;