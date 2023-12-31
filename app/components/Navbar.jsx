import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Home</a>
      </div>

      <div className="navbar flex-center">
      <SearchBar />
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/books">Books</Link>
          </li>
          <li>
            <Link href="/authors">Authors</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
      <a className="btn">sign in</a>
      <div className="card-actions">
        <button className="btn btn-primary btn-block">View cart</button>
      </div>
    </div>
  );
};

export default Navbar;
