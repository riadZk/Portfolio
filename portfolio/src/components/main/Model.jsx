import React, { useState , useEffect } from 'react';
import { useContext } from 'react';
import { ModeContext } from '../../context/Context'
import  Axios from 'axios';
const Model = ({ activeID, setShowModal }) => {
  const { darkMode} = useContext(ModeContext)
  const [portfolios , setPortfolios] = useState([]);
  Axios.defaults.withCredentials = true;
  useEffect(() => {
       Axios.get('https://test-jixq.vercel.app/api/projects')
      .then((res) => setPortfolios(res.data))
  }, []);
  const portfolio = portfolios.find((prt) => prt._id === JSON.parse(activeID));
  if (!portfolio) {
    return null;
}
  return (
    <div className={darkMode && 'dark'}>
      <div 
          className=
            'w-full h-auto fixed top-1/2 left-0 z-10 bg-opacity-40'>
        <div 
            className='max-h-[420px] md:w-full w-11/12
                         md:max-w-[400px] bg-white
                         dark:bg-gray-100
                        absolute top-1/2 left-1/2 z-20
                        rounded-lg transform -translate-x-1/2 p-5
                        -translate-y-1/2'>
          <div className='w-[300px] ml-7 h-1/2'>
            <figure>
              <img src={portfolio.ImgSrc} alt='' className='rounded-lg' />
            </figure>
          </div>
          <div>
            <h2 className='text-xl text-headingColor font-[500]'>
              {portfolio.Title}
            </h2>
            <p className='text-[15px] leading-7 text-smallTextColor'>
              {portfolio.Description}
            </p>
            <h4 className='text-headingColor text-[18px] text-[700]'>
              Skills:<br/>
              {portfolio.Technologies.map((item, index) => (
                <span
                  key={index}
                  className='bg-gray-200 py-1 ml-1 px-4 rounded-md text-[10px]'
                >
                  {item}
                </span>
              ))}
            </h4>
            <a href={portfolio.UrlP} target='_blanck'>
            <button className='lg:my-2 my-4  text-white py-2 px-4 rounded-lg font-[500] bg-headingColor ease-in duration-200'>
            <i class="ri-github-fill"> </i> Github 
            </button>
            </a>
          </div>
          <button onClick={()=>setShowModal(false)} className='w-[1.8rem] bg-transparent absolute top-[.3rem] right-[1rem] text-[25px] flex items-center justify-center rounded-lg leading-0 cursor-pointer'>
          <i class="ri-close-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
