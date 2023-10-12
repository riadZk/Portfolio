import React, { useContext } from 'react'
import { ModeContext } from '../../context/Context'

const Conatact = () => {
  const { darkMode } = useContext(ModeContext)
  return (
    <div className={darkMode && 'dark'}>
      <section id='conatact' className='pb-16 dark:bg-white bg-smallTextColor text-white dark:text-smallTextColor'>
        <div className='container'>
          <h2 className='font-[400] text-center dark:text-smallTextColor text-white text-[2.5rem] mb-8'>Contact</h2>
          <h2 className='font-[400] text-center dark:text-smallTextColor text-white text-[1.5rem] '>How can I help you ?</h2>
          <div className='md:flex justify-center items-center'>
            <div className='w-full rounded-lg  md:w-1/2 sm:h-[450px] lg:flex items-center px-4 lg:px-8 '>
              <form className='w-full'>
                <div className='mb-5'>
                  <input type='text' placeholder='Enter Your Name'
                    className='w-full p-3 focus:outline-none rounded-lg text-black  border-[.2px] border-black' />
                </div>
                <div className='mb-5'>
                  <input type='email' placeholder='Enter Your email'
                    className='w-full p-3 focus:outline-none rounded-lg text-black border-[.2px] border-black' />
                </div>
                <div className='mb-5 text-black'>
                  <input type='text' placeholder='Enter Your Subjet'
                    className='w-full p-3 focus:outline-none rounded-lg text-black border-[.2px] border-black' />
                </div>
                <div className='mb-5'>
                  <textarea
                    type='text'
                    rows={3}
                    placeholder='Enter Your Message'
                    className='w-full p-3 focus:outline-none border-[.2px] text-black border-black rounded-lg' />
                </div>
                <button className='w-full p-3 focus:outline-none rounded-lg bg-color2 text-white ease-in duration-700 hover:bg-hovercolor text-center '>
                  Send Message <i class="ri-send-plane-2-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Conatact
