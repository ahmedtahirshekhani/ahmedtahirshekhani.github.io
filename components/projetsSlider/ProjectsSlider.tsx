import { useState } from 'react';
import Productsp from '../../assets/data/data';
import ProjectCard from '../projectcard/ProjectCard';
import dispalyPic from '../../assets/images/project/project.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProjectsSlider = () => {
  let [start, setStart] = useState(0)
  let [end, setEnd] = useState(3)
  let dataFull: any = Productsp.slice(start, end);
  const router = useRouter();


  const increment = () => {
    if (end < 5) {
      setStart(start + 1)
      setEnd(end + 1)
    }
  }

  const decrement = () => {
    if (start > 0) {
      setStart(start - 1)
      setEnd(end - 1)
    }
  }
  const handleClick = (data: any) => {
    router.push({
      pathname: '/individualprojects',
      query: { data: JSON.stringify(data) }
    });
  };


  return (

    <div>
      <div className='flex flex-row'>
        <button>
          <i className="fa-solid fa-arrow-left text-linecolor text-[30px] mr-14 mt-1" onClick={decrement}></i>
        </button>

        {dataFull && dataFull.length > 0
          ? dataFull.map((data: any) => {
            return (
              <div>
                <div className="w-[400px] h-[450px]">
                  <div className="border-2 bg-linecolor border-primaryBackground w-[340px] h-[405px] rounded-3xl text-center shadow-[30px_30px_0_0_rgba(0,0,0,0.2)] hover:w-[350px] hover:h-[415px] ">
                    <Image
                      className="rounded-t-3xl border-b-2 border-primaryBackground"
                      src={dispalyPic}
                      alt="project display picture"
                    />
                    <h1 className="text-5xl text-secondaryText mt-4 font-bold ">
                      {data.heading}
                    </h1>
                    <p className="text-2xl h-20 text-primaryBackground text-left w-[430px] mx-4 mt-3">
                      {data.description}
                    </p>
                    <div className='w-full mt-2 text-right'>
                      <button className="bg-secondaryText text-linecolor py-2 mx-3 rounded-[7px] w-40" onClick={()=>handleClick(data)}>
                        <div className="flex flex-row">
                          <div className="text-lg font-semibold ml-4">Read More</div>
                          <i className="fa-sharp fa-solid fa-arrow-right text-linecolor text-[20px] ml-5 mt-1"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
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
