import { useState } from 'react';
import Productsp from '../../assets/data/data';
import ProjectCard from '../projectcard/ProjectCard';


const ProjectsSlider = () => {
  let [start, setStart] = useState(0)
  let [end, setEnd] = useState(3)
  let dataFull:any = Productsp.slice(start, end);

  
  const increment = () => {
    if (end < 5) {
      setStart(start + 1)
      setEnd(end + 1)
    }
  }

  const decrement = () => {
    if (start > 0 ) {
    setStart(start - 1)
    setEnd(end - 1)
  }}

  return (

    <div>
      <div className='flex flex-row'>
        <button>
          <i className="fa-solid fa-arrow-left text-linecolor text-[30px] mr-14 mt-1" onClick={decrement}></i>
        </button>

        {dataFull && dataFull.length > 0
          ? dataFull.map((data:any) => {
              return (
                <div>
                  <ProjectCard data={data}></ProjectCard>
                </div>
              );
            })
          : ''}

        <button>
          <i className="fa-solid fa-arrow-right text-linecolor text-[30px] mt-1" onClick={increment}></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectsSlider;
