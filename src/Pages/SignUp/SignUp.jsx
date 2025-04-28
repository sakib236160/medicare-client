import Lottie from "lottie-react";
import loginAnimation from "../../assets/animation/login.json";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createuser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createuser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created Successfuly!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Medicare | SignUp</title>
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md w-full p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-2">Register</h2>
            <p className="text-sm text-gray-600 text-center mb-6">
              Sign Up to Our Medical Camp Service
            </p>

            {/* Name Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
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
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            {/* Photo URL */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Photo URL
              </label>
              <input
                id="name"
                {...register("photoURL", { required: true })}
                type="name"
                placeholder="Enter your Photo URL"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
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
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                })}
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be Less then 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must be at least 6 characters long and include at
                  least one uppercase letter, one lowercase letter, one number,
                  and one special character.
                </p>
              )}
            </div>

            {/* Login Button */}
            <button className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary/90 transition">
              Sign up
            </button>

            {/* Sign Up Link */}
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have An account?{" "}
              <a
                href="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
