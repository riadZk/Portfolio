import React, { useContext } from 'react'
import { ModeContext } from '../../context/Context'
import {HiOutlineDocumentText} from 'react-icons/hi2'
const About = () => {
    const { darkMode } = useContext(ModeContext)
    const IMG = './images/Frame2.png'
    const CV = './images/CV.pdf'

    return (
        <div className={darkMode && 'dark'}>
            <section className='pt-10 px-10 text-white dark:text-smallTextColor dark:bg-white bg-smallTextColor' id='about'>
                <div className=' container pt-14'>
                    <h1 className='text-center font-[400] text-2xl'>About me</h1>
                    <div className='md:flex w-full items-center lg:justify-between sm:flex-col md:flex-row'>
                        <figure className='basis-1/3  mt-20 sm:mt-0'>
                            <div
                                data-aos="fade-left"
                                data-aos-duration="2500"
                                className='flex mt-10 items-center w-full h-full justify-center'>
                                <img src={IMG}></img>
                            </div>
                        </figure>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="2500" 
                            className='lg:w-2/3 w-full md:basis-1/2'>
                            <p
                                className='flex lg:gap-2 w-full font-[500] text-[15px] my-4 leading-7 '>
                                Hello!  I'm Riad Zakaria from casablanca <br />
                                I am a full stack web developer with a passion for interactive and
                                responsive web applications. I have experience working with JavaScript,
                                React, Bootstrap, php-mysql, Express tailwindcss Mongodb and git
                                I am a quik learner and I am always looking to expand my knowledge and skill set.
                                Beyond the world of code, I have a keen interest in football,
                                finding joy in both playing and watching the beautiful game.
                                Additionally, I have a passion for photography, capturing
                                moments and emotions through the lens.
                            </p>
                            <div className='mt-10 flex'>
                                <a href={CV} download
                                    className='mr-2 px-6 py-2
                                             bg-white
                                             text-smallTextColor
                                             dark:bg-smallTextColor
                                             dark:text-white
                                              rounded-lg flex items-center justify-center font-[700]'>
                                    <span className='mr-1'>Download CV</span> <HiOutlineDocumentText size={18} />
                                </a>
                                <a
                                    href='#skills'
                                    className=' px-6 py-2
                                                border-b border-solid border-indigo-300
                                                text-white
                                                dark:text-smallTextColor
                                                font-[700] cursor-pointer'>
                                    Skills 
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About