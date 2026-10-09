import React from 'react'

const Header = () => {
  return (
    <>
      <nav>
        <div className='h-20 bg-[#ffc2d1] flex items-center justify-between p-5'>
          <span className='bg-[#fb6f92] text-[#ffb3c6] p-4 rounded-4xl font-bold italic'>Kids Toys</span>
          <div className=" m-5">
            <button className='bg-[#e7c6ff] m-3 p-2 rounded-xl border border-[#7371fc] text-[#7371fc] font-semibold italic hover:border-[#a0c4e2] hover:text-[#a0c4e2] hover:bg-[#cfe8ef] duration-700'>Contatos</button>
            <button className='bg-[#e7c6ff] m-3 p-2 rounded-xl border border-[#7371fc] text-[#7371fc] font-semibold italic hover:border-[#a0c4e2] hover:text-[#a0c4e2] hover:bg-[#cfe8ef] duration-700'>Sobre</button>
          </div>
        </div>
      </nav>

      <header className='bg-[#ddfdfe] p-5 flex flex-col justify-center items-center'>
        <h1 className=' text-[#c8b6ff] font-extrabold text-4xl'>Seja Bem-vindo(a)</h1>
        <h2 className=' text-[#c8b6ff] font-extrabold text-4xl'> a <span className=' text-[#ffb3c6] font-bold italic'>Kids Toys</span></h2>
      </header>
     
    </>
  )
}

export default Header
