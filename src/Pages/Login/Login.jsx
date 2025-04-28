import Lottie from "lottie-react";
import loginAnimation from "../../assets/animation/login.json";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
    }
    return (
        <>
         <Helmet>
        <title>Medicare | Login</title>
      </Helmet>
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
                    <p className="text-sm text-gray-600 text-center mb-6">Sign In to Our Medical Camp Service</p>

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
                        <a href="/signup" className="text-primary font-semibold hover:underline">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;

