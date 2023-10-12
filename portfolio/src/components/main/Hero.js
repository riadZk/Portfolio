import React, { useContext } from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Button from './Button';
import { ModeContext } from '../../context/Context'
const Hero = () => {
    const GIF = './images/Developer.gif'
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Riad Zakaria", "full-stack déveloper"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);
    const {darkMode} = useContext(ModeContext)
    return (
            <div className={darkMode && 'dark'}>
                <section className='pt-10 px-10 text-white dark:text-smallTextColor dark:bg-white bg-smallTextColor'>
                    <div className=' container pt-10'>
                        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                            <div className='w-full md:basis-1/2'>
                                <h5
                                    data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className=' font-[600] text-[16px]'>
                                    Hi,
                                </h5>
                                <h1 data-aos="fade-up"
                                    data-aos-duration="1500"
                                    className=' font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>
                                    I'm <span ref={el}></span>
                                </h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    className='flex gap-2  font-[500] text-[15px] mt-4 leading-7 sm:pr-10 '>
                                    I am a motivated and versatile individual,
                                    always eager to take on new challenges.
                                    With a passion for learning I am dedicated
                                    to delivering high-quality results. With a positive
                                    attitude and a growth mindset,
                                    I am ready to make a meaningful
                                    contribution and achieve great things.
                                </p>
                                <div
                                    data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className='flex items-center gap-6 mt-7'>
                                    <a href='#portfolio' className='text-white dark:text-black font-[600] text-[16px] border-b border-solid border-blue-300'>
                                       <Button className="text-white dark:text-black">See Portfolio</Button> 
                                    </a>
                                </div>
                                <div
                                 data-aos="fade-left"
                                 data-aos-duration="1500"
                                 className='mt-2'>
                              <span className=' font-[600] text-[15px]'>
                                Follow me :
                              </span>
                              <span className='w-[35px] '>
                                <a href='https://github.com/riadZk/' target='_blanck' className=' pl-2 fon-[500] text-[18px]'>
                                <i class="ri-github-fill"></i>
                                </a>
                                <a href='https://www.linkedin.com/in/zakaria-riad-b5a718267/'  target='_blanck' className=' pl-2 fon-[500] text-[18px]'>
                                <i class="ri-linkedin-box-fill"></i>
                                </a>
                                <a href='https://www.instagram.com/ria.d49/'  target='_blanck' className=' pl-2 fon-[500] text-[18px]'>
                                <i class="ri-instagram-fill"></i>
                                </a>
                              </span>
                            </div>
                            </div>
                            <div className='w-full md:basis-1/2 flex justify-center'>
                                <img
                                className='lg:ml-20 mt-10 w-[300px]'
                                src={GIF}>
                                </img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default Hero
