import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProfileUpdateModal.css'
import { BiSolidImageAdd } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { profileUpdate } from '../../features/actions';

const MyModalComponent = ({ isOpen, onClose }) => {
  const dispatch=useDispatch()
  const [selectedImage, setSelectedImage] = useState('./avatar.jpg');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      const imageurl=reader.readAsDataURL(file);
      // console.log(imageurl);
    }
  };

  const callProfileUpdation=()=>{
    const data={
      profile:selectedImage
    }
    dispatch(profileUpdate(data))
  }

  return (
    <Modal className='px-5 max:w-[95%] w-[400px] border rounded-md shadow-lg'
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
        //   Width: '400px',
          height: '400px',
          margin: 'auto',
          display:'grid',
          justifyContent:'center',
          position:'relative',
          marginTop:'70px'
        },
      }}
    >
      <button onClick={onClose} className='absolute  font-bold text-black p-3 top-0 right-0 cursor-pointer'>x</button>
      <div className='font-bold p-4 font-serif  left-0 '>Update Profile Pic</div>

      <label htmlFor="fileToUpload" className="profile-pic border flex my-auto justify-center align-middle items-center text-xs font-bold" style={{ backgroundImage: `url(${selectedImage})` }}>
        <span className="glyphicon glyphicon-camera"></span>
        <span className='flex items-center '>Change Image  <BiSolidImageAdd className='ml-1'/></span>
      </label>
      
      <input
        type="file"
        name="fileToUpload"
        id="fileToUpload"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <button className="cta flex items-center" onClick={()=>callProfileUpdation()}>
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
