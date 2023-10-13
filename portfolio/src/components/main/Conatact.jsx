import React, {useRef, useContext, useState } from 'react'
import { ModeContext } from '../../context/Context'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { MdOutlineSubject } from 'react-icons/md';
const Conatact = () => {
  const form = useRef();
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [subject ,setSubject]=useState('')
  const [message,setMessage]=useState('');
  const { darkMode } = useContext(ModeContext)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
          'service_a16uxsp', 
          'template_g4g5dth',
           form.current, 
           'KVk7xI5u8oiavq90K'
          )
        .then(function(response) {
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
        }, function(err) {
            console.log('FAILED...', err);
        });
  };

  return (
    <div className={darkMode && 'dark'}>
      <section id='conatact' className='pb-16 dark:bg-white bg-smallTextColor text-white dark:text-smallTextColor'>
        <div className='container'>
          <h2 className='font-[400] text-center dark:text-smallTextColor text-white text-[2.5rem] mb-8'>Contact</h2>
          <h2 className='font-[400] text-center dark:text-smallTextColor text-white text-[1.5rem] '>How can I help you ?</h2>
          <div className='md:flex justify-center items-center'>
            <div className='w-full rounded-lg  md:w-1/2 sm:h-[450px] lg:flex items-center px-4 lg:px-8 '>
              <form ref={form} onSubmit={sendEmail} className='w-full' >
                <div className='mb-5'>
                  <input  type='text' 
                          value={user}
                          onChange={(e)=>{setUser(e.target.value)}}
                          placeholder='Your Name'
                          className='w-full p-3 rounded-lg text-black  border-[.2px] border-black' name="user_name" required/>
                </div>
                <div className='mb-5'>
                  <input  type='email' 
                          placeholder='Your email'
                          value={email}
                          onChange={(e)=>{setEmail(e.target.value)}}
                          className='w-full p-3 rounded-lg text-black border-[.2px] border-black' 
                          name="user_email" required/>
                </div>
                <div className='mb-5 text-black'>
                  <input  type='text' 
                          value={subject}
                          onChange={(e)=>setSubject(e.target.value)}
                          placeholder='Subject'
                          className='w-full p-3 rounded-lg text-black border-[.2px] border-black' required/>
                        </div>
                        <div className='mb-5'>
                          <textarea
                            type='text'
                            name="message"
                            rows={3}
                            placeholder='Your Message'
                            value={message}
                            onChange={(e)=>{setMessage(e.target.value)}}
                            className='w-full p-3 border-[.2px] text-black border-black rounded-lg' required/>
                        </div>
                    <button type='submit' className='w-full p-3 rounded-lg bg-color2 text-white ease-in duration-700 hover:bg-hovercolor text-center'>
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
