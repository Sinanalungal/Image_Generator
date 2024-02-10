import React from 'react';
import './Modal.css';
import { GrDocumentImage } from "react-icons/gr";

function EditModal({action}) {
  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
        {/* <div className='w-[60%] h-full max-lg:hidden flex items-center justify-center'> */}
        {/* <div className="flex flex-shrink-0 flex-col items-center ">
              <div className='flex'>
               <span><GrDocumentImage className="h-16 w-auto text-green-800" /></span><span className='font-black text-6xl text-green-800'>magify</span>
              </div>
            </div>
        </div> */}
        <div className='  w-full h-full section_f p-2 flex flex-col justify-center align-middle'>
          <h1 className='text-xl font-bold '>{action}</h1>
          <form id="consultation-form" className="formy flex flex-col mt-5" action="#">
            <input className="formy-input" required="" placeholder="Username" type="text" />
            <input className="formy-input" name="phone" required="" placeholder="Phone number" />
            <input className="formy-input" name="email" required="" placeholder="E-mail" type="email" />
            <input className="formy-input" name="password" required="" placeholder="Password" type="password" />
            <input className="formy-input" name="confim-password" required="" placeholder="Confirm Password" type="password" />
            <button className="button_subm">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditModal;
