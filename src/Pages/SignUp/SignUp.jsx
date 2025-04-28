import Lottie from "lottie-react";
import loginAnimation from "../../assets/animation/login.json";
import { useForm } from "react-hook-form";

const SignUp = () => {

    const {register,handleSubmit,formState: { errors }} = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="flex min-h-screen bg-base-200">
            {/* Left Side Animation */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
                <div className="max-w-md">
                    <Lottie animationData={loginAnimation} loop={true} />
                </div>
            </div>

            {/* Right Side Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 py-8">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full p-8">
                    <h2 className="text-3xl font-bold text-center mb-2">Register</h2>
                    <p className="text-sm text-gray-600 text-center mb-6">Sign Up to Our Medical Camp Service</p>

                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            {...register("name", { required: true })}
                            name="name"
                            type="name"
                            placeholder="Enter your name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            {...register("email", { required: true })}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            {...register("password",{ required: true,minLength:6, maxLength: 20 })}
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is Required</p>}
                    </div>

                    {/* Login Button */}
                    <button className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary/90 transition">
                        Login
                    </button>

                    {/* Sign Up Link */}
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-primary font-semibold hover:underline">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;