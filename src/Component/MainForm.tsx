import React, { useState } from 'react';
import Registration from './Registration';
import Login from './Login';

function MainForm() {
  const [loginPage, setLoginPage] = useState(true);

  const handleClick = () => {
    setLoginPage(false);
  };
  const registerHandeler = () => {
    setLoginPage(true);
  };
   
  const [avatar,setAvatar] = useState({file:null,url : ""})

   const fromSubmitData = (e)=>{
     e.preventDefault()
     const formData = new FormData(e.target)
     const {firstName, lastName,email,password} = Object.fromEntries(formData)
     console.log()
       console.log(firstName,lastName,email,password)
   }

   const avatarSlider = (e)=>{
       console.log(e)
      if(e.target.files[0]){
        setAvatar({
          file: e.target.files[0],
          url : URL.createObjectURL(e.target.files[0])
       })
      }
   }

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="main-content w-full max-w-2xl mx-auto mt-10">
        <h1 className="text-[32px] font-semibold text-white text-center">Welcome</h1>
        {
          loginPage ? 
            <form onSubmit={fromSubmitData} className="w-full">
              <Registration avatar ={`${avatar?.url}`} avatarHandeler={avatarSlider} clickHandler={handleClick} />
            </form> 
             : 
             <form className="w-full">
              <Login registerHandeler={registerHandeler} />
            </form> 
        }
      </div>
    </div>
  );
}

export default MainForm;
