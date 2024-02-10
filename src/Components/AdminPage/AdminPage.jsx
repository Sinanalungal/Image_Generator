import React, { useEffect, useState } from "react";
import { GrDocumentImage } from "react-icons/gr";
import "./AdminPage.css";
import Modal from "react-modal";
import EditModal from "../EditModal/Modal";

function AdminPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  const users = [
    { id: 1, name: "Neil Sims", position: "React Developer", status: "Online" },
    { id: 2, name: "Bonnie Green", position: "Designer", status: "Online" },
    {
      id: 3,
      name: "Jese Leos",
      position: "Vue JS Developer",
      status: "Online",
    },
    {
      id: 4,
      name: "Thomas Lean",
      position: "UI/UX Engineer",
      status: "Online",
    },
    {
      id: 5,
      name: "Leslie Livingston",
      position: "SEO Specialist",
      status: "Offline",
    },
  ];
  return (
    <>
      <div className=" bg-white min-h-svh">
        <nav className="bg-white border-b  shadow-md">
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
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
                  <span>
                    <GrDocumentImage className="h-8 w-auto text-green-800" />
                  </span>
                  <span className="font-black text-3xl text-green-800">
                    magify
                  </span>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3  flex">
                  {/* <div className="bg-green-800 rounded-xl text-white font-bold p-3 py-2 max-sm:hidden">
                    Admin
                  </div> */}
                  <button className="Btn1 ml-2">
                    <div className="sign1">
                      <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                      </svg>
                    </div>

                    <div className="text1 text-white">Logout</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className=" w-full flex  items-center mt-4 md:w-[90%] mx-auto p-9">
          <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg   ">
            <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-slate-300 p-9">
              {/* Dropdown Button */}
              <div className="flex mr-5 mb-4">
                <h1 className="font-black text-2xl">User Management</h1>

                {/* <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex items-center text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-slate-100 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Action button</span>
            Action
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button> */}
                {/* Dropdown menu */}
                {/* <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-white dark:divide-gray-600">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
              </li>
            </ul>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
            </div>
          </div> */}
              </div>

              {/* Search Input */}
              <div className="flex  ">
                <button className="CartBtn bg-black " onClick={setModalIsOpenToTrue}>
                  <span className="IconContainer">
                    <svg
                      className="svg text-white"
                      fill="none"
                      height="18"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="12" x2="12" y1="5" y2="19"></line>
                      <line x1="5" x2="19" y1="12" y2="12"></line>
                    </svg>
                  </span>
                  <p className="text ml-1 text-sm text-white">Add Users</p>
                </button>

                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative ml-2">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search-users"
                    className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for users"
                  />
                </div>
              </div>
            </div>

            {/* Table */}
            <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-500 dark:text-gray-200">
                <tr>
                  {/* <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th> */}
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="bg-white  dark:bg-slate-100 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-slate-300"
                  >
                    {/* <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${user.id}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor={`checkbox-table-search-${user.id}`} className="sr-only">
                    checkbox
                  </label>
                </div>
              </td> */}
                    <td className=" items-center">
                      {/* <img className="w-10 h-10 rounded-full" src={`/docs/images/people/profile-picture-${user.id}.jpg`} alt={`${user.name} image`} /> */}
                      <div className="ml-6 w-[50px] h-[50px] bg-black"></div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-gray-500"
                    >
                      <div className="ps-3">
                        <div className="text-base font-semibold">
                          {user.name}
                        </div>
                        <div className="font-normal text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">email@gmail.com</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        09876654332
                        {/* <div className={`h-2.5 w-2.5 rounded-full ${user.status === 'Online' ? 'bg-green-500' : 'bg-red-500'} me-2`}></div> */}
                        {/* {user.status} */}
                      </div>
                    </td>
                    <td className="px-6 py-4">active</td>
                    <td className="px-6 py-4">
                      {/* <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit user
                      </a> */}
                      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={setModalIsOpenToTrue}>
                        Edit
                      </button>
                      <button className="bg-red-700 mt-1 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-1">
                        Block
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal className=' mx-auto max-md:w-full mt-[60px] w-[30rem]'
        isOpen={modalIsOpen}
        style={{
          content: {

            background: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            padding: "20px",
            outline: "none",
          },
          overlay: {
            // backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <button
          onClick={setModalIsOpenToFalse}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "rgb(106,144,122)",
            color: "black",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          x
        </button>
        <EditModal action='Add/Edit User Details'  />
      </Modal>
    </>
  );
}

export default AdminPage;
