import React, { useContext , useEffect , useState } from 'react';
import { ModeContext } from '../../../context/Context';
import Axios from 'axios';


export default function Skills() {
  const [skills, setSkills] = useState([]);
  const { darkMode } = useContext(ModeContext);

  useEffect(() => {
    Axios.get('http://localhost:3090/api/skills')
      .then((res) => setSkills(res.data))
      .catch((error) => console.error('Error fetching skills:', error));
      console.log(skills)
  }, []);

    return (
      <div className={darkMode && 'dark'}>
          <div id="skills" className="py-10 bg-smallTextColor text-white dark:bg-white dark:text-smallTextColor">
          <div className="container mx-auto">
            <h2 className="text-3xl font-[400] text-center text-primary mb-6">
              Skills
            </h2>
            <div className="text-lg text-center text-secondary mb-8">
            My skills reflect a blend of creativity and technical acumen
            <br/> to craft visually appealing and user-friendly web interfaces.
            </div>
            <div className="flex flex-wrap justify-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className=" bg-card border border-blue-600 p-6 rounded-lg shadow-lg m-4 max-w-xs"
                >
                  <h3 className="text-xl text-center font-semibold text-secondary mb-4">
                    {skill.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center px-4 py-2"
                      >
                        <img
                          src={item.image}
                          className="w-6 h-6 mr-2"
                        />
                        <span className="text-sm">{item.name}</span>
                      </div>
                    ))}
                  </div>  
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      );
  
}