import React from 'react'

function Form({title,placeholder,type,name}) {
  return (
    <div className=" w-full flex flex-col gap-2 mt-4">
        <label className="text-ellipsis text-lg">{title}</label>
        <input name={name} className="focus-within:border-none placeholder:text-white  rounded-md px-2 py-2 bg-gray-900 outline-none" type={type} placeholder={placeholder} />
    </div>
  )
}

export default Form