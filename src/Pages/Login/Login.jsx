// import React from "react";

// const Login = () => {
//   return (
//     <div>
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col lg:flex-row">
//           {/* Left side login card */}
//           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//             <div className="card-body">
//               <fieldset className="fieldset">
//                 <label className="label">Email</label>
//                 <input type="email" className="input" placeholder="Email" />
//                 <label className="label">Password</label>
//                 <input
//                   type="password"
//                   className="input"
//                   placeholder="Password"
//                 />
//                 <div>
//                   <a className="link link-hover">Forgot password?</a>
//                 </div>
//                 <button className="btn btn-neutral mt-4">Login</button>
//               </fieldset>
//             </div>
//           </div>

//           {/* Right side image */}
//           <div className="w-full lg:w-1/2 flex justify-center">
//             <img
//               src="https://via.placeholder.com/400x300"
//               alt="Login Illustration"
//               className="max-w-sm rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import Lottie from "lottie-react";
import loginAnimation from "../../assets/animation/login.json";

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
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
                <form onSubmit={handleLogin} className="max-w-md w-full p-8">
                    <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
                    <p className="text-sm text-gray-600 text-center mb-6">Sign in to your account</p>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Login Button */}
                    <button className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary/90 transition">
                        Login
                    </button>

                    {/* Sign Up Link */}
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="/register" className="text-primary font-semibold hover:underline">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;

