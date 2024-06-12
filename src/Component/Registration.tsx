import React from 'react';
import Form from './UI/Form';
import { IoMdImage } from "react-icons/io";

function Registration({ clickHandler,avatarHandeler,avatar }) {
  console.log(avatar)
  return (
    <div className="text-white">
      <p className="text-center text-3xl mt-4">Registration</p>
      <div className="name md:flex gap-[1px] md:gap-2">
        <div className="firstName md:w-[50%]">
          <Form name="firstName" type="text" title="First name" placeholder="Enter your name" />
        </div>
        <div className="firstName md:w-[50%]">
          <Form name="lastName"  type="text" title="Last name" placeholder="Enter your last name" />
        </div>
      </div>
      <div className="">
        <Form name="gmail"  type="text" title="Gmail" placeholder="Enter your gmail" />
      </div>
      <div className="">
        <Form name="password"  type="password" title="Password" placeholder="Password" />
      </div>
      <div className="profile mt-4">
        <p className="text-white text-ellipsis font-md mb-2 font-semibold">Profile image</p>
        <div className="content border-[1px] py-2 border-gray-700 flex flex-col justify-center items-center">
          <div className="main-image rounded-full border-[1px] border-b-gray-500 w-[50px] h-[50px]">
            <div className="items flex justify-center items-center">
              {
                avatar ? <img className="h-[50px] w-[50px] p-1 rounded-full" src={avatar} alt="" /> : <IoMdImage className="w-full h-full p-2 text-white" /> 
              }
              
            </div>
          </div>
          <div className="file mt-2 bg-neutral-800 text-white px-1 rounded-sm cursor-pointer">
            <label htmlFor="file-upload" className="relative">
              <input onChange={avatarHandeler} id="file-upload" className="sr-only" name="file-upload" type="file" />
              <span className="cursor-pointer">File upload</span>
            </label>
          </div>
        </div>
      </div>
      <div className="bg-white text-black text-center my-4">
        <p>Error</p>
      </div>
      <div className="button text-white my-4">
        <button className="bg-indigo-500 hover:bg-indigo-700 duration-300 w-full py-2" type="submit">Send</button>
      </div>
      <div className="account text-white text-center pb-4 text-ellipsis">
        <p>
          You have an account?{' '}
          <span onClick={clickHandler} className="cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Registration;
