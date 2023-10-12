import { useState, useEffect, useRef, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { IoMoonSharp } from 'react-icons/io5'
import { ModeContext } from "../../../context/Context";

const Nav = () => {
    const LOGO = "./images/LOGO.png"
    const LOGO2 = "./images/LOGO2.jpg"

    const { handleModeChange, darkMode } = useContext(ModeContext);
    const [click, setClick] = useState(false);
    const headerRef = useRef(null);
    const handleClick = () => setClick(!click);
    const stickyHeader = () => {
        if (headerRef.current) {
            if (window.scrollY > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        }
    };
    useEffect(() => {
        stickyHeader(); 
        window.addEventListener('scroll', stickyHeader);
        return () => {
            window.removeEventListener('scroll', stickyHeader);
        };
    }, []);
    const content = <>
        <div className="block absolute top-16 w-full h-screen left-0 right-0 bg-colorButton text-white dark:bg-white  font-[700]  dark:text-smallTextColor z-20 transition">
            <ul className="text-center text-xl p-20">
                <li className="my-4 py-4">
                    <a onClick={handleClick} href='#about' className='font-[600] my-4 py-4'>About</a>
                </li>
                <li className="my-4 py-4">
                    <a onClick={handleClick} href='#portfolio' className='font-[600] my-4 py-4'>Portfolio</a>
                </li>
                <li className="my-4 py-4">
                    <a onClick={handleClick} href='#skills' className='font-[600] my-4 py-4'>Skills</a>
                </li>
                <li className="my-4 py-4">
                    <a onClick={handleClick} href='#conatact' className='font-[600] my-4 py-4'>Contact</a>
                </li>
            </ul>
        </div>
    </>
    return (
        <div className={darkMode && "dark"} ref={headerRef}>            
            <div  className='w-full bg-smallTextColor text-white dark:text-smallTextColor dark:bg-white h-[60px] flex items-center leading-[80px] px-10'>
            <div className="flex items-center justify-between  flex-1">
                <div className='font-[mono] '>
                    RiadZK
                </div>
                <div className='menu hidden lg:flex'>
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
                <div className='flex items-center gap-2'>
                    <a href="https://github.com/riadZk/" target="_blanck" className='flex items-center text-white bg-color2 font-[600] py-2 px-2 rounded-[8px] max-h-[40px] hover:text-white hover:bg-hovercolor2 ease-in duration-700 hover:font-[500]'>
                        <i class="ri-github-fill"> </i> <span className='m-2'>Github</span>
                    </a>
                    <label className='text-2xl bg-color2 rounded-lg text-white cursor-pointer'>
                    <input type="checkbox" className="hidden" onChange={handleModeChange} />                        
                    {
                        darkMode ?
                        <>
                       <IoMoonSharp size={17} className="my-3 mx-[10px]"/>
                        </>:<>
                        <IoIosSunny size={20} className="my-[9.5px] mx-2"/>
                        </>
                    }
                    </label>
                </div>
            </div>
            <div>
                {click && content}
            </div>
            <button className="block lg:hidden ml-3 ease-in duration-700 text-2xl  transtion" onClick={handleClick}>
                {
                    click ? <FaTimes /> : <i class="ri-menu-2-line"></i>
                }
            </button>
        </div>
        </div>
    );
};
export default Nav;






































// import React, { useRef, useEffect } from 'react'

// const Header = () => {

//     const headerRef = useRef(null)
//     const menuRef = useRef(null)

//     const stickyHeader = () => {
//         window.addEventListener('scroll', () => {
//             if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//                 headerRef.current.classList.add('sticky__header')
//             } else {
//                 headerRef.current.classList.remove('sticky__header')
//             }
//         })
//     }
//     useEffect(() => {
//         stickyHeader();
//         return window.removeEventListener('scroll', stickyHeader)
//     }, [])

//     const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
//     return (
//         <header ref={headerRef} className='w-full bg-smallTextColor text-white h-[60px] flex items-center leading-[80px] px-10'>
//             <div className='container '>
//                 <div className='flex items-center justify-between'>
//                     <div>
//                         RiadZK
//                     </div>
//                     <div className='menu' ref={menuRef} onClick={toggleMenu} >
//                         <ul className='flex items-center gap-10'>
//                             <li>
//                                 <a href='#about' className='font-[600]'>About</a>
//                             </li>
//                             <li>
//                                 <a href='#service' className='font-[600]'>Service</a>
//                             </li>
//                             <li>
//                                 <a href='#portfolio' className='font-[600]'>Portfolio</a>
//                             </li>
//                             <li>
//                                 <a href='#conatact' className='font-[600]'>Contact</a>
//                             </li>

//                         </ul>
//                     </div>
//                     <div className='flex items-center gap-4'>
//                         <button className='flex items-center text-white bg-primaryColor font-[600]  py-2 px-2 rounded-[8px] max-h-[40px]
//                                                          hover:text-white hover:bg-colorButton ease-in duration-700 hover:font-[500]'>
//                             <i class="ri-github-fill"> </i> <span className='m-2'>Github</span>
//                         </button>
//                         <span className='text-2xl bg-colorButton py-1 px-2 rounded-lg text-white cursor-pointer'>
//                             <i class="ri-contrast-2-line"></i>
//                         </span>
//                         <span onClick={toggleMenu} className='text-2xl text-white md:hidden  cursor-pointer'>
//                             <i class="ri-menu-2-line"></i>
//                         </span>
//                     </div>

//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Header

