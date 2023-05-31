import { useState, useEffect } from 'react';
import Productsp from '../../assets/data/data';
import ProjectCard from '../projectcard/ProjectCard';
import dispalyPic from '../../assets/images/project/project.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProjectsSlider = () => {
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(3);
  let dataFull: any = Productsp.slice(start, end);
  const router = useRouter();

  useEffect(() => {
    console.log('here');

    if (window.innerWidth < 768) {
      setEnd(1); // Set the number of items to 1 for mobile screens
    } else {
      setEnd(3); // Set the number of items to 3 for desktop screens
    }
  }, []);

  const increment = () => {
    if (end < 5) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };

  const decrement = () => {
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  };
  const handleClick = (data: any) => {
    router.push({
      pathname: '/individualprojects',
      query: { data: JSON.stringify(data) },
    });
  };

  return (
    <div className='font-montserrat'>
      <div className="flex flex-row">
        <button>
          <i
            className="fa-solid fa-arrow-left text-linecolor text-[30px] ml-2 mr-2 md:mr-14 mt-1"
            onClick={decrement}
          ></i>
        </button>

        {dataFull && dataFull.length > 0
          ? dataFull.map((data: any) => {
              return (
                <div key={data.id}>
                  <div className="md:w-[400px] md:h-[450px] w-[315px] h-[395px] ">
                    <div className="border-2 bg-linecolor border-primaryBackground w-[305px] h-[395px] md:w-[340px] md:h-[405px] rounded-2xl md:rounded-3xl text-center shadow-[5px_5px_0_0_rgba(0,0,0,0.2)] md:shadow-[30px_30px_0_0_rgba(0,0,0,0.2)] md:hover:w-[350px] md:hover:h-[415px]  ">
                      <Image
                        className="rounded-t-3xl border-b-2 border-primaryBackground"
                        src={dispalyPic}
                        alt="project display picture"
                      />
                      <h1 className="text-4xl md:text-5xl text-secondaryText mt-4 font-bold ">
                        {data.heading}
                      </h1>
                      <p className="text-xl md:text-2xl h-24 md:h-20 text-primaryBackground text-left w-full md:w-[430px] px-2 md:mx-4 mt-3">
                        {data.description}
                      </p>
                      <div className="w-full mt-2 text-right">
                        <button
                          className="bg-secondaryText text-linecolor py-2 mx-3 rounded-[7px] md-36 md:w-40 hover:text-secondaryText hover:bg-linecolor hover:outline"
                          onClick={() => handleClick(data)}
                        >
                          <div className="flex flex-row">
                            <div className="text-base md:text-lg font-semibold ml-2 md:ml-4">
                              Read More
                            </div>
                            <i className="fa-sharp fa-solid fa-arrow-right text-[20px] mx-2 md:mx-0 md:ml-5 pt-0.5 md:mt-1"></i>
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
          <i
            className="fa-solid fa-arrow-right text-linecolor text-[30px] mr-2 md:mr-0 mt-1"
            onClick={increment}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectsSlider;
