
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const Links = <>
        <li className="text-base"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-extrabold" : ""
            }
        >
            Home
        </NavLink></li>


        <li className="text-base">

            <NavLink
                to="/rooms"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " underline font-extrabold" : ""
                }
            >
                Rooms
            </NavLink></li>

        <li className="text-base">

            <NavLink
                to="/myBooking"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " underline font-extrabold" : ""
                }
            >
                My Booking
            </NavLink></li>


    </>


    return (
        <div className="navbar bg-purple-200 shadow-lg px-[5%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <img className="w-10 h-10 rounded-full" src="https://vignette2.wikia.nocookie.net/carrington/images/e/e5/Memo_logo.png/revision/latest?cb=20150331144105" alt="" />
                <a className=" lg:text-2xl text-purple-600 font-bold text normal-case ml-2 ">Hotel BD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link to="/login"><button className="btn  btn-outline btn-sm">Login</button></Link>
                {/* {
                user ?

                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} ><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box lg:w-52">
                            <p className="font-semibold">{user.displayName}</p>
                            <Link><button onClick={handleLogOut} className="btn  btn-outline btn-sm">Sign out</button></Link>
                        </ul>
                    </div>

                    :
                    <Link to="/login"><button className="btn  btn-outline btn-sm">Login</button></Link>
            } */}



            </div>
        </div>
    );
};

export default Navbar;