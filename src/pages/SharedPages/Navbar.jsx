/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import logo from '../../../public/logo.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Handle successful logout if needed
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="font-bold lg:ml-72" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/assignment">
          All Assignment
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/signUp">
          Register
        </NavLink>
      </li>
    </>
  );

  const navLinksAfterLogin = (
    <>
      <li>
        <NavLink className="font-bold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/assignment">
          All Assignment
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/createAssignment">
          Create Assignment
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/myAssignment">
          My Assignment
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/submittedAssignment">
          Submitted Assignment
        </NavLink>
      </li>
    </>
  );

  return (
    <div className={`navbar bg-base-200 md:px-10 sticky top-0 z-10`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user ? navLinksAfterLogin : navLinks}
          </ul>
        </div>
        <img
          className="w-[45px] h-[45px] rounded-full mr-2 hidden md:block"
          src={logo}
          alt=""
        />
        <p className="font-bold text-blue-700 text-2xl">Learn Hub</p>
      </div>

      <div className="navbar-center">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user ? navLinksAfterLogin : navLinks}
          </ul>
        </div>

        {user ? (
          <>
            
            <div className="gap-1 m-2 relative">
                <div className="group inline-block">
                    <img className="w-10 rounded-full cursor-pointer" src={user.photoURL} alt="" />
                    <div className="hidden group-hover:block absolute bg-black text-white text-sm py-1 px-2 rounded top-8 -left-16">
                    {user.displayName}
                    </div>
                </div>
                </div>
            <div className="gap-1 m-2">
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
