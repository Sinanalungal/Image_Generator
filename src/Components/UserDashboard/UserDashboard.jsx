import React, { useEffect, useState } from 'react'
import { GrDocumentImage } from "react-icons/gr";
import './UserDashboard.css'
import { Link } from 'react-router-dom';

// Updated code using strokeLinecap

function UserDashboard() {
    const [dropdown,setDropdown]=useState(false)
    useEffect(()=>{
        return(
            setDropdown(false)
        )
    },[])
  return (
    <>
    <div className=' bg-slate-100'>
    <nav className="bg-white border-b shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              /> */}
              <span><GrDocumentImage className="h-8 w-auto text-green-800" /></span><span className='font-black text-3xl text-green-800'>magify</span>

            </div>
            {/* <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Team
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Projects
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Calendar
                </a>
              </div>
            </div> */}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button> */}
            <div className="relative ml-3">
              <div>
                <button
                onClick={()=>setDropdown(!dropdown)}
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              {dropdown && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-800 hover:text-white"  role="menuitem" tabIndex="-1" id="user-menu-item-0" to='/userprofile'>
                    Your Profile
                  </Link>
                  {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">
                    Settings
                  </a> */}
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-800 hover:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                    Sign out
                  </Link>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      {/* Mobile menu, show/hide based on menu state */}
      {/* <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
            Dashboard
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Team
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Projects
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Calendar
          </a>
        </div>
      </div> */}
    </nav>
    
    <div className="h-[500px] w-full flex  items-center ">
        <div className='w-[60%] h-[70%] max-md:w-[99%] mx-auto bg-black'></div>
        
    </div>
      
        <form className='lg:w-[80%] w-[99%] mx-auto py-[38px]'>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> */}
                    {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg> */}
                {/* </div> */}
                <input type="search" id="default-search" className="form-input block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-50" placeholder="Enter details...."/>                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4  py-2 dark:focus:ring-white" style={{backgroundColor:'rgb(106,144,122)'}}>Generate</button>
            </div>
        </form>
    </div>
    
    </>
  )
}

export default UserDashboard