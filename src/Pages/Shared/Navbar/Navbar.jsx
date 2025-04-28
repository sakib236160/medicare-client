// import { Link, NavLink } from "react-router-dom";
// import imglogo from '../../../assets/logo.png'
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";

// const Navbar = () => {
//     const {user} = useContext(AuthContext);
//     return (
//         <div className="fixed z-10 bg-white/80 w-full">
//             <nav className="flex items-center justify-between  py-3 shadow-md px-5">
//             {/* Logo Section */}
//             <div className="flex items-center">
//                 <Link to="/" className="flex items-center">
//                     <img
//                         src={imglogo}
//                         alt="Logo"
//                         className="w-24 md:w-36"
//                     />
//                 </Link>
//             </div>

//             {/* Menu Links */}
//             <ul className="flex items-center gap-6">
//                 <NavLink to="/" className="text-gray-700 hover:text-primary font-medium">
//                     Home
//                 </NavLink>
//                 <NavLink to="/contact-us" className="text-gray-700 hover:text-primary font-medium">
//                     Contact Us
//                 </NavLink>
//                 <NavLink to="/available-camps" className="text-gray-700 hover:text-primary font-medium">
//                     Available Camps
//                 </NavLink>
//                 <NavLink to="/dashboard" className="text-gray-700 hover:text-primary font-medium">
//                     Dashboard
//                 </NavLink>
//             </ul>

//             {/* Login/Register Buttons */}
//             <div className="flex items-center gap-3">
//                 <Link
//                     to="/login"
//                     className="px-4 py-2 rounded bg-primary/10 text-primary font-semibold hover:bg-primary/20"
//                 >
//                     Login
//                 </Link>
//                 <Link
//                     to="/signup"
//                     className="px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary/90"
//                 >
//                     Sign Up
//                 </Link>
//             </div>
//         </nav>
//         </div>
//     );
// };

// export default Navbar;



import { Link, NavLink } from "react-router-dom";
import imglogo from '../../../assets/logo.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="fixed z-10 bg-white/80 w-full">
            <nav className="flex items-center justify-between py-3 shadow-md px-5">
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
                    {user && (
                        <NavLink to="/dashboard" className="text-gray-700 hover:text-primary font-medium">
                            Dashboard
                        </NavLink>
                    )}
                </ul>

                {/* Right Side (Login/Sign Up or Profile Picture) */}
                <div className="flex items-center gap-3 relative">
                    {user ? (
                        <div className="relative">
                            <img
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                src={user.photoURL}
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
                            />
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                                    <div className="px-4 py-2 text-gray-700 font-semibold">
                                        {user.displayName || "User"}
                                    </div>
                                    <Link
                                        to="/dashboard"
                                        className="block px-4 py-2 text-gray-700 hover:bg-primary/10"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary/10"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="px-4 py-2 rounded bg-primary/10 text-primary font-semibold hover:bg-primary/20"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary/90"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
