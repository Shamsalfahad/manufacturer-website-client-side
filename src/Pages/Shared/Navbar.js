import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  // console.log(user);
  return (
    <div className="navbar p-2 bg-gradient-to-r from-blue-100 to-blue-200  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {/* <li>
              <NavLink to="/purchase">Purchase</NavLink>
            </li> */}

            <li>
              <NavLink to="/portfolio">My Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              {user ? (
                <>
                  <div>
                    <li className="ml-[-18px]">
                      <NavLink to="/dashboard">DashBoard</NavLink>
                    </li>
                  </div>
                  <div className="flex  items-center  ">
                    <p className=" ">{user.displayName}</p>
                    <div
                      class="avatar online 
                  "
                    >
                      <div class="w-12 ml-1 rounded-full">
                        <img src={user.photoURL} alt="" />
                      </div>
                    </div>
                  </div>
                  <button onClick={logout} className="btn btn-ghost">
                    Sign out
                  </button>
                </>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>
        <a className="m-0 lg:ml-20 btn btn-ghost normal-case text-xl">
          Tools-ware
        </a>
      </div>
      <div className="navbar-end hidden lg:flex justify-end lg:ml-[500px]">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio"> Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            {user ? (
              <div className="">
                <div>
                  <li className="ml-[-18px]">
                    <NavLink to="/dashboard">DashBoard</NavLink>
                  </li>
                </div>
                <div className="flex  items-center  ">
                  <p className="btn btn-ghost">{user.displayName}</p>
                  <div
                    class="avatar online 
                  "
                  >
                    <div class="w-12 rounded-full mr-4">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </div>
                </div>
                <button onClick={logout} className="btn btn-ghost">
                  Sign out
                </button>
              </div>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label
          tabindex="1"
          for="dashBoard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
