import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        const url = 'http://localhost:5000/addservice'
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
            
        })
        .then (res => res.json())
        .then (result => {
            console.log(result)
        })
        
    }

  return (
    <>
    <h1>Add Service</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
        <textarea placeholder='description'{...register("description" )} />
        <input  placeholder='price' type="number" {...register("price")} />
        <input  placeholder='imnage url' type="text" {...register("img")} />
        <input  type="submit" />
    </form>
    </>
  )
}

export default AddService