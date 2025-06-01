
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

// import auth from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth/web-extension';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    // const { user, setUser } = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setError('');
        setLoading(true);
        signIn(data.email, data.password)
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                setError('Invalid email or password.');
            })
            .finally(() => setLoading(false));
    };

    

    const handleGoogleLogin = () => {
        setError('');
        setLoading(true);
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                // setUser(result.user);
                  navigate(location?.state ? location.state : '/');
            })

            .catch(error => {
                console.error(error)
            })
            .finally(() => setLoading(false));
    }

    const handleGithubLogin = () => {
        setError('');
        setLoading(true);
        signInWithGithub()
            .then(result => {
                console.log(result.user);
                // setUser(result.user);
                  navigate(location?.state ? location.state : '/');
            })

            .catch(error => {
                console.error(error)
            })
            .finally(() => setLoading(false));
    }




  
    

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex flex-grow items-center justify-center">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-center text-gray-700">Login</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>}
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
                        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>

                        {/* Google Login Button */}
                        <button
                            type="button"
                            className="btn bg-white text-black border-[#e5e5e5] w-full flex items-center gap-2"
                            onClick={handleGoogleLogin}
                            disabled={loading}
                        >
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        {/* GitHub Login Button */}
                        <button
                            type="button"
                            className="btn bg-black text-white border-black w-full flex items-center gap-2"
                            onClick={handleGithubLogin}
                            disabled={loading}
                        >
                            <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                            Login with GitHub
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