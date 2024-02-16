import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import Modal from "react-modal";
import EditModal from "../EditModal/Modal";
import { useDispatch } from "react-redux";
import { userLogout } from "../../features/LoginSlice";
import MyModalComponent from "./ProfileUpdateModal";

Modal.setAppElement("#root");

function UserProfile() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageUpdateModal,setImageUpdateModal] = useState(false)
  const dispatch = useDispatch();

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };


  const openModal = () => {
    setImageUpdateModal(true);
  };

  const closeModal = () => {
    setImageUpdateModal(false);
  };

  return (
    <>
      <div className="h-[700px] w-full flex justify-center  items-center ">
        
         <div className="border-2  shadow-2xl border-gray-300 rounded-lg lg:w-[80%] h-[85%] max-md:grid  w-full  bg-gray-400 flex  relative min-[385px]:items-center">
         <div onClick={openModal} className=" max-[385px]:mt-[77px] bg-cover bg-center bg-no-repeat rounded-md absolute w-[180px] ml-[20%]  max-sm:h-[43%]  max-sm:w-[150px] max-md:ml-4 h-[50%] flex " style={{backgroundImage:`url(data:image/png;base64,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)`}}><span className="bg-gray-100 opacity-0 hover:opacity-60 cursor-pointer p-1 rounded-sm w-full flex items-center justify-center font-black">Edit</span></div>

          <div className="bg-black w-[26%] max-md:w-full max-md:flex max-md:justify-between  h-full">
            <div className="text-white font-serif mt-3 ml-4 text-xl font-black">PROFILE</div>
            <div className="text-white ml-2 md:hidden mr-2 flex mt-2">
              <button className="Btn mt-3 text-xs " onClick={setModalIsOpenToTrue}>
                <div className="sign">
                  <svg height="1em" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
                </div>
                <div className="text z-0">edit</div>
              </button>
              <button className="Btn2 forred ml-2 mt-3 text-white text-xs mr-2 bg-red-600" onClick={() => dispatch(userLogout())}>
                <div className="sign " >
                  <svg viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>
                <div className="text2 ">Logout</div>
              </button>
          </div>
          </div>
          <div className="bg-gray-200 max-md:w-full h-full w-[74%] flex justify-end">
            <div className="mr-4 flex flex-col justify-center h-full text-3xl lg:text-2xl max-sm:text-xl md:text-2xl font-black font-serif">
              <div className="mb-3">AMAL</div><div className="mb-3">9207400638</div><div>amal@gmail.com</div></div>
            <div className="h-full flex max-md:hidden bg-gray-200"><button  className="Btn mt-3 text-xs " onClick={setModalIsOpenToTrue}>
              <div className="sign">
                <svg height="1em" viewBox="0 0 512 512">
                  <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                </svg>
              </div>
              <div className="text z-0">edit</div>
            </button>
            <button className="Btn2 forred ml-2 mt-3 text-white text-xs mr-2 bg-red-600" onClick={() => dispatch(userLogout())}>
              <div className="sign " >
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="text2 ">Logout</div>
            </button></div>
          </div>
         </div>
        
      </div>
      <Modal
        className=" mx-auto max-md:w-full mt-[60px] w-[30rem]"
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
          overlay: {},
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
        <EditModal action="Edit Details" />
      </Modal>
      <MyModalComponent  isOpen={imageUpdateModal} onClose={closeModal} />
    </>
  );
}

export default UserProfile;
