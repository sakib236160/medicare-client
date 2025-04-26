import { Link, NavLink } from "react-router-dom";
import imglogo from '../../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="fixed z-10 bg-white/80 w-full">
            <nav className="flex items-center justify-between  py-3 shadow-md px-5">
            {/* Logo Section */}
            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <img
                        src={imglogo}
                        alt="Logo"
                        className="w-24 md:w-36"
                    />
                </Link>
            </div>

            {/* Menu Links */}
            <ul className="flex items-center gap-6">
                <NavLink to="/" className="text-gray-700 hover:text-primary font-medium">
                    Home
                </NavLink>
                <NavLink to="/contact-us" className="text-gray-700 hover:text-primary font-medium">
                    Contact Us
                </NavLink>
                <NavLink to="/available-camps" className="text-gray-700 hover:text-primary font-medium">
                    Available Camps
                </NavLink>
                <NavLink to="/dashboard" className="text-gray-700 hover:text-primary font-medium">
                    Dashboard
                </NavLink>
            </ul>

            {/* Login/Register Buttons */}
            <div className="flex items-center gap-3">
                <Link
                    to="/login"
                    className="px-4 py-2 rounded bg-primary/10 text-primary font-semibold hover:bg-primary/20"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary/90"
                >
                    Sign Up
                </Link>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
