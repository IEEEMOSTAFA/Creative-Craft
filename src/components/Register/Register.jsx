// import React from 'react';


// import { useForm } from 'react-hook-form';
// // import { Link } from 'react-router-dom';
// // import { useContext } from 'react';
// // import Navbar from '../Shared/Navbar/Navbar';
// // import { AuthContext } from '../../providers/AuthProvider';




// const Register = () => {
//     // const { createUser } = useContext(AuthContext);

//     // // Initialize React Hook Form
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     // Handle form submission
//     const onSubmit = (data) => {
//         console.log(data); // Form data

//         // Create user using AuthContext
//         // createUser(data.email, data.password)
//             // .then((result) => {
//             //     console.log(result.user); // User created successfully
//             // })
//             // .catch((error) => {
//             //     console.error(error); // Handle error
//             // });
//     };

//     return (
//         <div className="min-h-screen flex flex-col bg-gray-100">
            
//             <div className="flex flex-grow items-center justify-center">
//                 <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//                     <h2 className="text-3xl font-semibold text-center text-gray-700">Register</h2>
//                     <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//                         {/* Name Field */}
//                         <div className="form-control">
//                             <label className="label text-gray-600 font-medium">Name</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 className="input input-bordered w-full"
//                                 {...register('name', { required: 'Name is required' })}
//                             />
//                             {errors.name && (
//                                 <span className="text-sm text-red-500">{errors.name.message}</span>
//                             )}
//                         </div>

//                         {/* Photo URL Field */}
//                         <div className="form-control">
//                             <label className="label text-gray-600 font-medium">Photo URL</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your photo URL"
//                                 className="input input-bordered w-full"
//                                 {...register('photoUrl', { required: 'Photo URL is required' })}
//                             />
//                             {errors.photoUrl && (
//                                 <span className="text-sm text-red-500">{errors.photoUrl.message}</span>
//                             )}
//                         </div>

//                         {/* Email Field */}
//                         <div className="form-control">
//                             <label className="label text-gray-600 font-medium">Email</label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="input input-bordered w-full"
//                                 {...register('email', {
//                                     required: 'Email is required',
//                                     pattern: {
//                                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                         message: 'Invalid email address',
//                                     },
//                                 })}
//                             />
//                             {errors.email && (
//                                 <span className="text-sm text-red-500">{errors.email.message}</span>
//                             )}
//                         </div>

//                         {/* Password Field */}
//                         <div className="form-control">
//                             <label className="label text-gray-600 font-medium">Password</label>
//                             <input
//                                 type="password"
//                                 placeholder="Enter your password"
//                                 className="input input-bordered w-full"
//                                 {...register('password', {
//                                     required: 'Password is required',
//                                     minLength: {
//                                         value: 6,
//                                         message: 'Password must be at least 6 characters',
//                                     },
//                                 })}
//                             />
//                             {errors.password && (
//                                 <span className="text-sm text-red-500">{errors.password.message}</span>
//                             )}
//                         </div>

//                         {/* Submit Button */}
//                         <button type="submit" className="btn btn-primary w-full">
//                             Register
//                         </button>
//                     </form>
//                     <p className="text-sm text-center text-gray-600">
//                         Already have an account?{' '}
//                         {/* <Link to="/login" className="text-blue-500 hover:underline">
//                             Login
//                         </Link> */}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Register;



















import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// import Navbar from '../Shared/Navbar/Navbar';
// import { AuthContext } from '../../providers/AuthProvider';
import Swal from "sweetalert2";
const Register = () => {
    const { createUser } = useContext(AuthContext);

    // Initialize React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
    // Create user using AuthContext
    createUser(data.email, data.password)
        .then((result) => {
            console.log(result.user); // User created successfully
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Registration successful!',
            });
        })
        .catch((error) => {
            console.error(error); // Handle error
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: error.message || 'Registration failed!',
            });
        });
};

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* <Navbar /> */}
            <div className="flex flex-grow items-center justify-center">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-center text-gray-700">Register</h2>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label text-gray-600 font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && (
                                <span className="text-sm text-red-500">{errors.name.message}</span>
                            )}
                        </div>

                        {/* Photo URL Field */}
                        <div className="form-control">
                            <label className="label text-gray-600 font-medium">Photo URL</label>
                            <input
                                type="text"
                                placeholder="Enter your photo URL"
                                className="input input-bordered w-full"
                                {...register('photoUrl', { required: 'Photo URL is required' })}
                            />
                            {errors.photoUrl && (
                                <span className="text-sm text-red-500">{errors.photoUrl.message}</span>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label text-gray-600 font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="text-sm text-red-500">{errors.email.message}</span>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <label className="label text-gray-600 font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                })}
                            />
                            {errors.password && (
                                <span className="text-sm text-red-500">{errors.password.message}</span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-full">
                            Register
                        </button>
                    </form>
                    <p className="text-sm text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;