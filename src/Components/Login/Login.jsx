import React from 'react';
import Lottie from 'react-lottie';
import "./Login.css";
import { GrDocumentImage } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';


function Login() {

 const navigator=useNavigate()
  return (
    <>
      <div className='w-full h-svh flex '>
        <div className='w-[60%] max-lg:hidden h-full rounded-r-xl grid items-center justify-center'>
            <div className="flex flex-shrink-0 flex-col items-center ">
              <div className='flex'>
               <span><GrDocumentImage className="h-20 w-auto text-green-800" /></span><span className='font-black text-8xl text-green-800'>magify</span>
              </div>
              {/* <div className='text-xs  mt-7 text-gray-800  '>Empower your creativity with Imagify – Transform your ideas to Images</div> */}
            </div>

        </div>
        <div className='lg:w-[40%] w-full  h-full bg-slate-200 rounded-l-lg flex flex-col justify-center items-center'>
          <section className="section_form max-sm:w-full">
            <div className="flex flex-shrink-0 max-sm:mx-auto flex-col items-center lg:hidden">
              <div className='flex'>
               <span><GrDocumentImage className="h-10 w-auto text-green-800" /></span><span className='font-black text-3xl text-green-800 mb-8'>magify</span>
              </div>
            </div>
            <h1 className='text-3xl max-sm:text-sm max-sm:px-9 font-bold max-sm:mx-auto'>LOGIN</h1>
            <form id="consultation-form max-sm:text-xs login" className="feed-form max-sm:w-[85%] max-sm:mx-auto" action="#">
              <input name="phone" required="" placeholder="Phone number" />
              <input name="email" required=""  placeholder="E-mail" type="email" />
              <button className="button_submit " onClick={()=>navigator('/userdashboard')}>LOGIN</button>
            </form>
            
          </section>
          <span className='text-xs mt-4 text-gray-800'>Not a user?<Link className='  text-green-800' to='/signup'>Create account</Link></span>
        </div>
      </div>
    </>
  );
}

export default Login;
