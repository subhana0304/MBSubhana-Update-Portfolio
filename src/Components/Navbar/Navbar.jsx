import React from 'react'
import { NavLink } from 'react-router-dom'

const data = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About Me",
    path: "/aboutme"
  },
  {
    title: "Experience",
    path: "/experience"
  },
  {
    title: "Skill",
    path: "/skill"
  },
  {
    title: "Education & Certification",
    path: "/education"
  }
]


export default function Navbar() {
  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full shadow-md z-50">
        <div className="container mx-24">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
              data.map(item => <li className='text-black menu-item' key="item.path"><NavLink style={({ isActive }) => ({
                color: isActive ? "#8561df" : "black",
                fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "transparent" : "inherit",
              })} to={item.path}>{item.title}</NavLink></li>)
            }
          </ul>
        </div>
        <div className="navbar-start flex justify-start items-start">
          <a className="text-2xl text-yellow-500" style={{ fontWeight: "bold" }}>M B Subhana
          </a>
        </div>
        
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              data.map(item => <li className='text-white menu-item' key="item.path"><NavLink style={({ isActive }) => ({
                color: isActive ? "#eab308" : "white",
                fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "transparent" : "inherit",
              })} to={item.path}>{item.title}</NavLink></li>)
            }
          </ul>
        </div>
        </div>
      </div>
    </>

  )
}

