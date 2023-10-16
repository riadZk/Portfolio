import React, { useRef, useContext, useState } from 'react'
import { ModeContext } from '../../context/Context'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { IoMail } from 'react-icons/io5';
const Conatact = () => {
  const { darkMode } = useContext(ModeContext)
  const form = useRef();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_a16uxsp',
      'template_g4g5dth',
      form.current,
      'KVk7xI5u8oiavq90K'
    )
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
          position: 'top-end',
          background: "white",
          color: "green",
          width: "40vh",
          text: 'Message send',
          showConfirmButton: false,
          timer: 1000
        });
        setUser('')
        setEmail('')
        setSubject('')
        setMessage('')
      }, function (err) {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className={darkMode && 'dark'}>
      <section id='conatact' className='pb-16 dark:bg-Light bg-smallTextColor text-white dark:text-smallTextColor'>
        <div className='container'>
          <h2 className='font-[400] text-center dark:text-smallTextColor text-white text-[2.5rem] mb-8'>
          Contact <span className='text-indigo-300'>Me</span></h2>
          <div className='md:flex justify-center '>
            <div 
              className='flex mb-5 flex-col gap-5'
              data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="2500" 
              >
              <h2
                className='font-[400] text-center dark:text-smallTextColor text-white text-[1.5rem]'>Talk to me</h2>
              <div
                className='flex flex-col dark:bg-slate-100 bg-white text-smallTextColor py-3 px-10 rounded-lg place-items-center '>
                <i class="ri-mail-send-fill"></i>
                <span className='font-bold'>Email</span>
                <p className='text-lg font-[500]'>riadzakaria48@gmail.com</p>
              </div>
              <div
                className='flex flex-col dark:bg-slate-100 bg-white text-smallTextColor py-3 px-10 rounded-lg place-items-center '>
                <MdOutlinePhoneIphone size={20} />
                <span className='font-bold'>
                  Phone
                </span>
                <p className='text-lg font-[500] '>06 05 33 78 23</p>
              </div>
            </div>
            <div className='w-full rounded-lg  md:w-1/2 sm:h-[450px] lg:flex justify-center px-4 lg:px-8 '>
              <form 
                ref={form} onSubmit={sendEmail} 
                className='w-full'
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="2500" 
                >
                <h2 className='font-[400] text-center dark:text-smallTextColor text-white text-[1.5rem] mb-5 '
                >How can I help you ?</h2>
                <div className='mb-5'>
                  <input type='text'
                    value={user}
                    onChange={(e) => { setUser(e.target.value) }}
                    placeholder='Your Name'
                    className='w-full p-3 rounded-lg text-black  border-[.2px] border-black' name="user_name" required />
                </div>
                <div className='mb-5'>
                  <input type='email'
                    placeholder='Your email'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    className='w-full p-3 rounded-lg text-black border-[.2px] border-black'
                    name="user_email" required />
                </div>
                <div className='mb-5 text-black'>
                  <input type='text'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder='Subject'
                    className='w-full p-3 rounded-lg text-black border-[.2px] border-black' required />
                </div>
                <div className='mb-5'>
                  <textarea
                    type='text'
                    name="message"
                    rows={3}
                    placeholder='Your Message'
                    value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                    className='w-full p-3 border-[.2px] text-black border-black rounded-lg' required />
                </div>
                <div className='flex justify-center'>
                  <button type='submit' className='w-2/3 p-3 rounded-lg bg-color2 text-white ease-in duration-700 hover:bg-hovercolor text-center'>
                    Send Message <i class="ri-send-plane-fill"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Conatact
