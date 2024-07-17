import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from "axios"
import {toast} from 'react-hot-toast';
const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        const userInfo ={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        }
      
       await axios.post("/users/signup",userInfo)
        .then((res)=>{
            if(res.data){
                toast.success('SignUp Successful!');
            }
localStorage.setItem("Users",JSON.stringify(res.data.user))

        }) 
        .catch((error)=>{
            if (error.response){
                toast.error("Error"+error.response.data.message);
            }
            
        })

    };


    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="div">
                            {/* Close button */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">Sign Up</h3>

                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Enter your fullname'
                                    className='w-80 px-3 border rounded-md outline-none'
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input
                                    type='email'
                                    placeholder='Enter your Email'
                                    className='w-80 px-3 border rounded-md outline-none'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input
                                    type='password'
                                    placeholder='Enter your Password'
                                    className='w-80 px-3 border rounded-md outline-none'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Button */}
                            <div className='flex justify-around mt-4'>
                                <button className='text-xl bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>Sign Up</button>
                                <p className='text-xl'>
                                    Already registered? <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Log In</button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Login />
        </>
    );
}

export default SignUp;
