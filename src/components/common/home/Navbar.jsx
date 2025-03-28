import React from 'react'
import { ButtonSolid } from '../base/buttons/Button'

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-between items-center pt-5'>
        <img src="/images/logo2.png" alt="" className='h-6 lg:h-9'/>
        <ButtonSolid className='!bg-[#00529e] !rounded-[50px] !whitespace-nowrap'>Chat Us</ButtonSolid>
      </nav>
    </div>
  )
}
