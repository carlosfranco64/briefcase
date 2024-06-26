import React from 'react'
import { useAll } from '../../context/AllContext'
import { MdLightMode, MdNightsStay } from 'react-icons/md'

export const Header = () => {

  const {isMode,showMode}=useAll()


  return (
    <div className={` px-6 ${
      isMode ? "bg-blue-100 text-blue-500" : "bg-gray-800 text-white"
    }   w-full border-l font-bold flex justify-between `}>

<h1 className='text-2xl my-4'>Portafolio</h1>

<div onClick={showMode} className={`flex gap-4 justify-start fixed right-4 ${isMode ? "bg-blue-100":"bg-gray-800"} rounded-full p-2 my-2 z-10 `}>
{/* <h1>idioma </h1> */}


{isMode ?
<MdNightsStay   onClick={showMode} className='my-auto text-3xl font-bold cursor-pointer text-blue-800 -rotate-30 ' />
:
<MdLightMode onClick={showMode} className='my-auto text-3xl font-bold cursor-pointer' />

 }



</div>


    </div>
  )
}
