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
          <div className={darkMode && 'dark'}>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[80%] max-w-[400px] bg-white dark:bg-gray-100 rounded-lg p-5 min-h-[200px] max-h-[440px] md:max-h-[420px]'>
        <div className='group w-full mt-1 relative'>
          <figure className='' >
            <img src={portfolio.imgUrl} alt='' className='rounded-lg' />
          </figure>
          <div className='w-full h-full rounded-lg bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
            <div className='w-full h-full flex items-center justify-center'>
              <button className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-lg'>
              <i class="ri-github-fill"> </i> Code
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className=' text-lg text-headingColor font-semibold'>
            {portfolio.title}
          </h2>
          <p className='text-sm leading-5 text-gray-800'>
            {portfolio.description}
          </p>
          <h4 className='text-headingColor text-sm font-semibold'>
            <span>Skills:</span> <br />
            {portfolio.technologies.map((item, index) => (
              <button
                key={index}
                className='bg-gray-200 py-1 ml-1 px-2 rounded-md text-xs'
              >
                {item}
              </button>
            ))}
          </h4>
        </div>
        <button onClick={() => setShowModal(false)} className='absolute top-[2px] right-2 text-2xl flex items-center justify-center rounded-lg leading-0 cursor-pointer'>
          <i className="ri-close-line"></i>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Model;
