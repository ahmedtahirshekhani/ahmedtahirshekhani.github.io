import background from '../../assets/images/background/background.png';
import Image from 'next/image';
import ProjectCard from '../../components/projectcard/ProjectCard';
import Head from 'next/head';
import dispalyPic from '../../assets/images/project/project.png';
import shekaniNew from '../../assets/images/shekani_new.jpg';
import PrimaryFooter from '../../components/footer/primaryFooter';
import Productsp from '../../assets/data/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const HomePage = () => {

  const [dataFull, setDataFull] = useState(Productsp.slice(0, 3))
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      console.log('here');

      if (window.innerWidth < 768) {
        setDataFull(Productsp.slice(0, 2)) // Set the number of items to 1 for mobile screens
      } else {
        setDataFull(Productsp.slice(0, 3)) // Set the number of items to 3 for desktop screens
      }
    };

    // Attach the event listener to window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (data: any) => {
    router.push({
      pathname: '/individualprojects',
      query: { data: JSON.stringify(data) },
    });
  };

  return (
    <div className='font-montserrat'>
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/icon.ico" />
        </Head>
      </>
      <div>
        <Image
          className="w-full absolute z-0 h-[280px] md:h-[800px] top-0 left-0"
          src={background}
          alt=""
        />
        <div className="absolute z-10 grid grid-cols-2 gap-10 md:gap-44 ml-6 md:ml-10">
          <div className="w-full flex flex-col gap-y- md:ml-56 mt-24 md:mt-56">
            <h1 className="text-3xl md:text-8xl  font-bold">Full Stack</h1>
            <h1 className="w-3/4 text-4xl md:text-9xl  font-bold">Developer</h1>
            <Link className="" href={'/about'}>
              <button className="bg-linecolor text-secondaryText py-2 mt-5 md:mt-10 rounded-[7px] w-[150px] md:w-[330px] hover:bg-secondaryText hover:text-linecolor">
                <div className="flex flex-row">
                  <div className="w-96 text-xs md:text-lg font-semibold ml-4">
                    Want to know more about me?
                  </div>
                  <i className="fa-sharp fa-solid fa-arrow-right text-[20px] mx-3 md:mx-4 mt-1"></i>
                </div>
              </button>
            </Link>
          </div>
          <div className="avatar md:pl-10 md:ml-3 pt-12 md:pt-48">
            <div className="rounded-full w-[100px] md:w-[430px] ">
              <Image src={shekaniNew} alt="Ahmed Tahir Shekhani" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[280px] md:h-[800px]"></div>

      <div className="w-full bg-linecolor h-[370px] md:h-[700px]">
        <h1 className="text-secondaryText text-4xl md:text-7xl  font-semibold md:font-bold px-3 pt-2 md:p-5 md:ml-16">
          Projects
        </h1>
        <div className=" grid grid-cols-2 md:grid-cols-3 place-items-center  mt-3">
          {dataFull && dataFull.length > 0
            ? dataFull.map((data: any) => {
                return (
                  <div key={data.id}>
                    <div className="md:w-[400px] md:h-[450px] w-[175px] h-[220px] ">
                      <div className="border-2 bg-linecolor border-primaryBackground w-[170px] h-[210px] md:w-[340px] md:h-[405px] rounded-2xl md:rounded-3xl text-center shadow-[10px_10px_0_0_rgba(0,0,0,0.2)] md:shadow-[30px_30px_0_0_rgba(0,0,0,0.2)] md:hover:w-[350px] md:hover:h-[415px] ">
                        <Image
                          className="rounded-t-3xl border-b-2 border-primaryBackground"
                          src={dispalyPic}
                          alt="project display picture"
                        />
                        <h1 className="text-xl md:text-5xl text-secondaryText mt-2 md:mt-4 font-bold ">
                          {data.heading}
                        </h1>
                        <p className="text-xs md:text-2xl h-11 md:h-20 text-primaryBackground text-left md:w-[430px] mx-1 md:mx-4 mt-1 md:mt-3">
                          {data.description}
                        </p>
                        <div className="w-full md:mt-2 text-right ">
                          <button
                            className="bg-secondaryText text-linecolor py-1 md:py-2 mx-1 md:mx-3 rounded-[4px] md:rounded-[7px] hover:text-secondaryText hover:bg-linecolor hover:outline md:w-40"
                            onClick={() => handleClick(data)}
                          >
                            <div className="flex flex-row ">
                              <div className=" text-xs md:text-lg font-semibold ml-1 md:ml-4">
                                Read More
                              </div>
                              <i className="fa-sharp fa-solid fa-arrow-right text-[10px] md:text-[20px] mx-1 md:ml-5  mt-1"></i>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
        <div className="w-full text-center mt-4 pb-12">
          <Link
            className=" md:w-24 text-xl font-montserrat font-normal"
            href={'/projectsDisplay'}
          >
            <button className="bg-secondaryText text-linecolor py-2 rounded-[10px] md:w-52 md:h-16 hover:text-secondaryText hover:bg-linecolor hover:outline">
              <div className="flex flex-row">
                <div className=" text-xl md:text-3xl ml-4">See More</div>
                <i className="pt-1.5 md:pt-0.5 a-sharp fa-solid fa-arrow-right text-[20px] md:text-[35px] mx-3 md:mx-0 md:ml-5 "></i>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
