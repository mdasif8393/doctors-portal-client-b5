import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    //react query
    const {data:services , isLoading} = useQuery(['services'], ()=> fetch('http://localhost:5000/service').then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>;
    }

    


    /**
     * 3 ways to store images // Free open public storage is ok for practice project
     * 1. Third party storage
     * 2. Your own storage in your own server (file system)
     * 3. Database: Mongo DB
     * 
     * YUP: to validate file Search: Yup file validation for react hook form
     * 
     */
    const imageStorageKey = '938e64417beec945f2d726c4dc17db92';
    const onSubmit = async (data) => {
        const image = data?.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result?.success) {
                const img = result?.data?.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img,
                }
                //send to your database
                fetch("http://localhost:5000/doctor",{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}` 
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success("Doctor added successfully");
                        reset();
                    }
                    else{
                        toast.error("Failed to add doctor")
                    }
                })
            }
        })
    };
    return (
        <div>
            <h2 className="text-2xl">Add a new Doctor</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-gray-600">

            {/* Name */}
        <div className="form-control w-full max-w-xs">
            <label className="label ">
                <span className="label-text text-gray-600">Name</span>
            </label>

            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs bg-white" 
                {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is required'
                    }
                  })}
            />
            
            <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
            </label>
        </div>
            
            {/* Email */}
          <div className="form-control w-full max-w-xs">
            <label className="label ">
                <span className="label-text text-gray-600">Email</span>
            </label>

            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs bg-white" 
                {...register("email", {
                    pattern: {
                      value: /^(.+)@(.+)$/,
                      message: 'enter valid email address'
                    },
                    required: {
                        value: true,
                        message: 'Email is required'
                    }
                  })}
            />
            
            <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
            </label>
          </div>
        
          <div className="form-control w-full max-w-xs">
            <label className="label ">
                <span className="label-text text-gray-600">Specialty</span>
            </label>
          <select {...register('specialty')} className="select w-full max-w-xs input-bordered">
            {
                services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
            }
          </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label ">
                <span className="label-text text-gray-600">Photo</span>
            </label>

            <input type="file" placeholder="Your Name" className="input input-bordered w-full max-w-xs bg-white" 
                {...register("image", {
                    required: {
                        value: true,
                        message: 'Image is required'
                    }
                  })}
            />
            
            <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
            </label>
        </div>

            <br />
            <input className="btn w-full max-w-xs" type="submit" value="Add"/>
        </form>
        </div>
    );
};

export default AddDoctor;