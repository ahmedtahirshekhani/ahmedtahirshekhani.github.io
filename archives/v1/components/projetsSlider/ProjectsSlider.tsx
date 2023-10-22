import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Axios from 'axios';
const ProjectsSlider = () => {
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(3);
  const [dataFull2, setDataFull2] = useState<any>();

  const router = useRouter();
  let dataFull: any = [];

  useEffect(() => {
    const tempData = async () => {
      Axios
        .get('https://personal-website-backend-sigma.vercel.app/api/projects')
        .then((res) => {
          setDataFull2(res.data)
          console.log("The JSON Object needed is: ", res.data)
        })
    }
    tempData()
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setEnd(1);
    } else {
      setEnd(3);
    }
  }, []);

  if (dataFull2 !== undefined) {
    dataFull = dataFull2.slice(start, end);
  }

  const increment = () => {
    if (end < dataFull2.length) {
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
    <div className="font-montserrat">
      <div className="flex flex-row">
        <button>
          <i
            className="fa-solid fa-arrow-left text-linecolor text-[30px] ml-2 mr-2 md:mr-14 mt-1"
            onClick={decrement}
          ></i>
        </button>

        {/* {dataFull && dataFull.length > 0
          ? dataFull.map((data: any) => {
              return (
                <div key={data.id}>
                  <div className="md:w-[400px] md:h-[450px] w-[315px] h-[395px] ">
                    <div className="border-2 bg-linecolor border-primaryBackground w-[305px] h-[395px] md:w-[340px] md:h-[405px] rounded-2xl md:rounded-3xl text-center shadow-[5px_5px_0_0_rgba(0,0,0,0.2)] md:shadow-[30px_30px_0_0_rgba(0,0,0,0.2)] md:hover:w-[350px] md:hover:h-[415px]  ">
                      <Image
                        className="rounded-t-3xl border-b-2 border-primaryBackground"
                        src={data.image[0]}
                        alt="project display picture"
                        width="350"
                        height="400"
                        style={{ objectFit: 'fill' }}
                      />
                      <h1 className="text-4xl md:text-xl h-14 text-secondaryText mt-4 font-bold ">
                        {data.heading}
                      </h1>
                      <p className="text-xl md:text-base h-20 md:h-20 text-primaryBackground text-left w-full md:w-[320px] px-2 md:mx-2 ">
                        {data.description.split(' ').slice(0, 18).join(' ')}
                        {' ... '}
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
          : ''} */}
        {dataFull && dataFull.length > 0
          ? dataFull.map((data: any) => {
            return (
              <div key={data.id}>
                <div className="md:w-[400px] md:h-[450px] w-[315px] h-[395px] ">
                  <div className="border-2 bg-linecolor border-primaryBackground w-[305px] h-[395px] md:w-[340px] md:h-[405px] rounded-2xl md:rounded-3xl text-center shadow-[5px_5px_0_0_rgba(0,0,0,0.2)] md:shadow-[30px_30px_0_0_rgba(0,0,0,0.2)] md:hover:w-[350px] md:hover:h-[415px]  ">
                    <Image
                      className="rounded-t-2xl md:rounded-t-3xl border-b-2 border-primaryBackground"
                      src={data.image[0]}
                      alt="project display picture"
                      width="350"
                      height="400"
                      style={{ objectFit: 'cover', width: '100%', height: '47%' }}
                    />
                    <h1 className="text-xl md:text-xl h-14 text-secondaryText mt-4 font-bold ">
                      {data.heading}
                    </h1>
                    <p className=" ml-2 mr-2 md:text-base h-20 md:h-20 text-primaryBackground text-left w-full md:w-[320px] px-2 md:mx-2 ">
                      {data.description.split(' ').slice(0, 18).join(' ')}
                      {' ... '}
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
