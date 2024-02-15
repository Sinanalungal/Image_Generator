import React from "react";
import "./Modal.css";

function EditModal({ action }) {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="  w-full h-full section_f p-2 flex flex-col justify-center align-middle">
          <h1 className="text-xl font-bold ">{action}</h1>
          <form
            id="consultation-form"
            className="formy flex flex-col mt-5"
            action="#"
          >
            <input
              className="formy-input"
              required=""
              placeholder="Username"
              type="text"
            />
            <input
              className="formy-input"
              name="phone"
              required=""
              placeholder="Phone number"
            />
            <input
              className="formy-input"
              name="email"
              required=""
              placeholder="E-mail"
              type="email"
            />
            <input
              className="formy-input"
              name="password"
              required=""
              placeholder="Password"
              type="password"
            />
            <input
              className="formy-input"
              name="confim-password"
              required=""
              placeholder="Confirm Password"
              type="password"
            />
            <button className="button_subm">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditModal;
