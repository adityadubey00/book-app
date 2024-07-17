import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Login = (props) => {
    const setAuthUser=props.setAuthUser
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("/users/login", userInfo);
            if (res.data) {
                toast.success('Login Successful!');
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                setAuthUser(true);
                document.getElementById("my_modal_3").close();

          
            }
        } catch (error) {
            if (error.response) {
                toast.error("Error: " + error.response.data.message);
                setTimeout(()=>{},3000)
            }
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close button */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                              onClick={() => document.getElementById("my_modal_3").close()}
                        >✕</Link>
                        <h3 className="font-bold text-lg">Log In</h3>

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
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>
                                Log In
                            </button>
                            <p>
                                Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Sign Up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
