import React, { useEffect, useState } from "react";
import { GrDocumentImage } from "react-icons/gr";
import "./UserDashboard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataFetch, userLogout } from "../../features/LoginSlice";
import { createImage } from "../../features/actions";
import { base_url } from "../../features/base_url";

function UserDashboard() {
  const [dropdown, setDropdown] = useState(false);
  const [content, setContent] = useState("");
  const { user } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataFetch());
    return () => {
      setDropdown(false);
    };
  }, []);
  const { ImageUrl, loader } = useSelector((store) => store.image);

  function submitCaller(e) {
    e.preventDefault();
    const data = {
      prompt: content,
    };
    dispatch(createImage(data));
  }

  return (
    <>
      <div className=" bg-slate-100">
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
                  <span>
                    <GrDocumentImage className="h-8 w-auto text-green-800" />
                  </span>
                  <span className="font-black text-3xl text-green-800">
                    magify
                  </span>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3">
                  <div>
                    <button
                      onClick={() => setDropdown(!dropdown)}
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
                        src={
                          user.profile
                            ? `${base_url}${user.profile}`
                            : "./avatar.jpg"
                        }
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
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-800 hover:text-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                        to="/userprofile"
                      >
                        Your Profile
                      </Link>

                      <Link
                        onClick={() => dispatch(userLogout())}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-800 hover:text-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="h-[500px] w-full flex justify-center items-center text-center">
          {loader ? (
            <div className="loading-wave">
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
            </div>
          ) : ImageUrl ? (
            <img className="mt-10 rounded-md" src={ImageUrl} alt="" />
          ) : (
            <div className="w-[90%] text-sm text-gray-400 font-bold">
              <p style={{ lineHeight: "1.5" }}>
                Transforming words into visual masterpieces
              </p>
              <p style={{ lineHeight: "1.5" }}>
                Where creativity meets technology.
              </p>
              <p style={{ lineHeight: "1.5" }}>
                Unleash the power of your imagination with our text-to-image
                generator and bring your ideas to life effortlessly.
              </p>
            </div>
          )}
        </div>

        <form
          className="lg:w-[80%] w-[99%] mx-auto py-[38px] mt-2"
          onSubmit={(e) => submitCaller(e)}
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-input block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-50"
              placeholder="Enter details...."
            />{" "}
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4  py-2 dark:focus:ring-white"
              style={{ backgroundColor: "rgb(106,144,122)" }}
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserDashboard;
