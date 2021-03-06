import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import MyItems from '../MyItems/MyItems';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);




    const onSubmit = (data, e) => {
        console.log(data);
        const url = `https://murmuring-harbor-91585.herokuapp.com/myitem`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(outcome => {
                console.log(outcome)
                e.target.reset()
                toast('Equipment Added')
            })

    };


    return (
        <div className='w-1/2 mx-auto py-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                <input className='border w-full py-4 p-2 rounded-lg mb-2 font-sans' type="email" name="email" placeholder='Enter your email' required {...register("email")} />
                <br />
                <input className='border w-full py-4 p-2 rounded-lg mb-2 font-sans' placeholder='Enter Image URL' type="text" {...register("img")} />
                <br />
                <input className='border w-full py-4 p-2 rounded-lg mb-2 font-sans' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <br />
                <input className='border w-full py-4 p-2 rounded-lg mb-2 font-sans' placeholder='Price' type="number" {...register("price")} />
                <br />
                <input className='border w-full py-4 p-2 rounded-lg mb-2 font-sans' placeholder='Supplier Name' {...register("supplier")} />
                <br />
                <input className='border w-full py-4 p-2 rounded-lg mb-2 font-sans' placeholder='Quantity' type="number" {...register("quantity")} />
                <br />
                <textarea className='border w-full py-4 p-2 rounded-lg mb-2 font-sans' placeholder='description' {...register("description")}></textarea>
                <br />
                <input type="submit" value="Add Service" className='bg-lime-500 hover:bg-lime-600 px-16 py-2 w-full rounded-lg text-white text-2xl' />
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddItems;