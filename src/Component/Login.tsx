import React from 'react'
import Form from './UI/Form'

function Login({registerHandeler}) {
  return (
    <div className="text-white">
      <p className="text-3xl text-center mt-4">Login</p>
      <Form name="gmail"  type="text" title="Your gmail" placeholder="Inter your gmail"/>
      <Form name="password"  type="password" title="Your password" placeholder="Inter your password"/>
       <div className="">
         <button className=" bg-indigo-500 hover:bg-indigo-700 duration-300 w-full mt-6 py-2 text-ellipsis">Login</button>
       </div>
       <div onClick={registerHandeler} className="text-area text-center mt-4">
         <p>You have dont account / <span className="cursor-pointer hover:underline text-ellipsis">Register</span></p>
       </div>
    </div>
  )
}

export default Login