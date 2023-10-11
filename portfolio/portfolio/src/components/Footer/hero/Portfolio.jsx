import React, { useContext, useState , useEffect } from 'react'
// import data from '../../../assets/data/portfolioData'
import Axios from 'axios'
import Model from './Model'
import { ModeContext } from '../../../context/Context'
const Portfolio = () => {
    const [data , setData] = useState([])
    const [showModal,setShowModal] = useState(false)
    const [activeID,setActiveID] = useState(false)
    const showModalHandler = (_id) =>{
            setActiveID(_id);  // Removed JSON.parse, assuming _id is a string
            setShowModal(true);
    }
    const { darkMode} = useContext(ModeContext);
    useEffect(() => {
        Axios.get('http://localhost:3090/projects')
          .then((res) => setData(res.data))
          .catch((error) => console.error('Error fetching skills:', error));
      }, []);
      console.log(data);
      console.log(activeID)
    return (
        <div className={darkMode && 'dark'}>
            <section id='portfolio' className='bg-smallTextColor dark:text-smallTextColor text-white dark:bg-white'>
                <div className='container'>
                    <div className='flex items-center justify-center flex-wrap'>
                        <div className='mb-7 sm:mb-0'>
                            <h3 className='text-center mb-6 text-[2rem]'>
                                My Projects
                            </h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 flex-wrap'>
                        {
                            data.map((pr, index) => (
                                <div
                                data-aos="fade-zoom-in"
                                data-aos-delay="50"
                                data-aos-duration="2000"
                                className=' group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                    <figure>
                                        <img className='rounded' src={pr.ImgSrc} />
                                    </figure>
                                    <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                      <div className='w-full h-full flex items-center justify-center'>
                                      <button onClick={()=>showModalHandler(JSON.stringify(pr._id))} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-lg'>
                                            See Details
                                        </button>
                                      </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </section>
                    {
                     showModal && <Model setShowModal={setShowModal} activeID={activeID}/>
                    }
        </div>
    )
}
export default Portfolio
