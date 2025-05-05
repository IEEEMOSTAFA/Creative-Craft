
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';


// const Login = () => {
    
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     // Handle form submission
//     const onSubmit = (data) => {
//         console.log('Form Data:', data); // Log form data

//     };

//     return (
//         <div className="min-h-screen flex flex-col bg-gray-100">
          
//             <div className="flex flex-grow items-center justify-center">
//                 <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//                     <h2 className="text-3xl font-semibold text-center text-gray-700">Login</h2>
//                     <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
//                             <div className="text-right mt-2">
//                                 <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <button type="submit" className="btn btn-primary w-full">
//                             Login
//                         </button>
//                     </form>
//                     <p className="text-sm text-center text-gray-600">
//                         Don't have an account?{' '}
//                         <Link to="/register" className="text-blue-500 hover:underline">
//                             Register
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;











import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// import { AuthContext } from '../../providers/AuthProvider';
// import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // Initialize React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log('Form Data:', data); // Log form data

        // Sign in user using AuthContext
        signIn(data.email, data.password)
            .then((result) => {
                console.log('User logged in:', result.user);

                // Navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.error('Login error:', error);
            });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* <Navbar /> */}
            <div className="flex flex-grow items-center justify-center">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-center text-gray-700">Login</h2>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                            <div className="text-right mt-2">
                                <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-full">
                            Login
                        </button>
                    </form>
                    <p className="text-sm text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;