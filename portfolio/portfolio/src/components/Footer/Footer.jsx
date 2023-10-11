import React, { useContext } from 'react'
import { ModeContext } from '../../context/Context'
import { IoMail } from 'react-icons/io5'
import { MdOutlinePhoneIphone } from 'react-icons/md'
const Footer = () => {
  const { darkMode } = useContext(ModeContext)
  return (
    <div className={darkMode && 'dark'}>
      <footer className='bg-Footer2 text-white  pt-10 lg:pt-0'>
          <div className='container'>
              <div className='sm:flex items-center justify-between md:gap-8'>
                    <div className='flex w-full justify-between items-center pb-4 gap-4 flex-wrap md:gap-8 mt-5'>
                       <div className='font-[400]'>RiadZK</div>

                        <div>
                        <ul className='flex items-center gap-10'>
                        <li>
                            <a href='#about' className='font-[600]'>About</a>
                        </li>
                        <li>
                            <a href='#service' className='font-[600]'>Service</a>
                        </li>
                        <li>
                            <a href='#portfolio' className='font-[600]'>Portfolio</a>
                        </li>
                        <li>
                            <a href='#conatact' className='font-[600]'>Contact</a>
                        </li>
                        </ul>
                        </div>
                        <div className='text-white'>
                        <span className=' font-[600] text-[15px]'>
                          Follow me :
                        </span>
                        <span className='w-[35px] '>
                                <a href='https://github.com/riadZk/' target='_blanck' className=' pl-2  text-[18px]'>
                                <i class="ri-github-fill"></i>
                                </a>
                                <a href='https://www.linkedin.com/in/zakaria-riad-b5a718267/'  target='_blanck' className=' pl-2 text-[18px]'>
                                <i class="ri-linkedin-box-fill"></i>
                                </a>
                                <a href='https://www.instagram.com/ria.d49/'  target='_blanck' className=' pl-2 text-[18px]'>
                                <i class="ri-instagram-fill"></i>
                                </a>
                        </span>
                          <span className='flex justify-center place-items-center '>
                            <IoMail size={15}/> <p className='ml-2 text-sm'>riadzakaria48@gmail.com</p><br/>
                          </span>
                          <span className='flex justify-center place-items-center '>
                            <MdOutlinePhoneIphone size={15}/> <p className='ml-2 text-sm mr-[70px]'>06 05 33 78 23</p><br/>
                          </span>
                        </div>
                    </div>
                  </div>
              </div>
            <div className=' bg-Footer text-gray-200 text-[14px] py-3 mt-2'>
              <div className='container flex items-center justify-center'>
                <div clasName="flex items-center justify-center">Copyright 2023 developed by Riad Zakaria - All right reserved</div>
              </div>
            </div>
      </footer>
    </div>
  )
}

export default Footer
