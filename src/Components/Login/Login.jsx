import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/Animation - 1707454838945.json'; // Make sure to provide the correct path to your animation file
import "./Login.css";

function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <div className='w-full h-svh flex'>
        <div className='w-[60%] h-full rounded-r-xl grid items-center justify-center'>
          {/* <h1 className='text-3xl font-bold '>Image Generator</h1> */}
          {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
        </div>
        <div className='w-[40%] h-full bg-slate-200 rounded-l-lg flex justify-center items-center'>
          <section className="section_form">
            <h1 className='text-3xl font-bold'>LOGIN</h1>
            <form id="consultation-form" className="feed-form" action="#">
              {/* <input required="" placeholder="Name" type="text" /> */}
              <input name="phone" required="" placeholder="Phone number" />
              <input name="email" required="" placeholder="E-mail" type="email" />
              <button className="button_submit">ORDER</button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
