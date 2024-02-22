import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./ProfileUpdateModal.css";
import { BiSolidImageAdd } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import { base_url } from "../../features/base_url";
import { toast } from "react-toastify";
import { dataFetch } from "../../features/LoginSlice";

const MyModalComponent = ({ isOpen, onClose }) => {
  const { user } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(
    user.profile ? `${base_url}${user.profile}` : "./avatar.jpg"
  );
  const [updateImg, setUpdateImg] = useState("");

  useEffect(
    () =>
      setSelectedImage(
        user.profile ? `${base_url}${user.profile}` : "./avatar.jpg"
      ),
    [user]
  );
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUpdateImg(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      const imageurl = reader.readAsDataURL(file);
      console.log(imageurl);
    }
  };
  console.log(user);

  const callProfileUpdation = async () => {
    const formData = new FormData();
    formData.append("profile", updateImg);
    formData.append("email", user.email);

    console.log(formData);
    try {
      await axios
        .patch(`${base_url}api/users/update_profile/`, formData)
        .then((response) => {
          const userdataCookie = Cookies.get("accessToken");
          const userData = userdataCookie ? JSON.parse(userdataCookie) : {};
          userData.profile = response.data.updated_image;
          const updatedUserdata = JSON.stringify(userData);
          Cookies.set("accessToken", updatedUserdata);
          toast.success("profile updated successfully");
          dispatch(dataFetch());
          onClose();
        });
    } catch (e) {
      toast.error("There is some issue");
    }
  };
  console.log(selectedImage);
  return (
    <Modal
      className="px-5 max:w-[95%] w-[400px] border rounded-md shadow-lg"
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          height: "400px",
          margin: "auto",
          display: "grid",
          justifyContent: "center",
          position: "relative",
          marginTop: "70px",
        },
      }}
    >
      <button
        onClick={onClose}
        className="absolute  font-bold text-black p-3 top-0 right-0 cursor-pointer"
      >
        x
      </button>
      <div className="font-bold p-4 font-serif  left-0 ">
        Update Profile Pic
      </div>

      <label
        htmlFor="fileToUpload"
        className="profile-pic border flex my-auto justify-center align-middle items-center text-xs font-bold"
        style={{ backgroundImage: `url(${selectedImage})` }}
      >
        <span className="glyphicon glyphicon-camera"></span>
        <span className="flex items-center ">
          Change Image <BiSolidImageAdd className="ml-1" />
        </span>
      </label>

      <input
        type="file"
        name="fileToUpload"
        id="fileToUpload"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <button
        className="cta flex items-center"
        onClick={() => callProfileUpdation()}
      >
        <span>Update</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </Modal>
  );
};

export default MyModalComponent;
