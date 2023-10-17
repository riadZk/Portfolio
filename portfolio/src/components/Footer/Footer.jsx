import React, { useContext } from 'react'
import { ModeContext } from '../../context/Context'
import '../../App.css'
const Footer = () => {
  const { darkMode } = useContext(ModeContext)
  return (
    <div className={darkMode && 'dark'}>
      <div className=' bg-Footer text-gray-200 text-sm lg:text-[14px] py-3 px-6'>
        <div className='container flex items-center flex-col-reverse md:flex-row gap-4 md:justify-between'>
          <div clasName="">Developed by Riad Zakaria</div>
          <div clasName="">Copyright © 2023 by RiadZk</div>
          <div>
            <span className='text-[15px] '>
              Follow me :
            </span>
            <span >
              <a href='https://github.com/riadZk/' target='_blank' className=' pl-2  text-[18px]'>
                <i class="ri-github-fill"></i>
              </a>
              <a href='https://www.linkedin.com/in/zakaria-riad-b5a718267/' target='_blank' className=' pl-2  text-[18px]'>
                <i class="ri-linkedin-box-fill"></i>
              </a>
              <a href='https://www.instagram.com/ria.d49/' target='_blank' className=' pl-2  text-[18px]'>
                <i class="ri-instagram-fill"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
