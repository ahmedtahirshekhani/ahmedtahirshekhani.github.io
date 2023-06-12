import background from '../../assets/images/background/background.png';
import Image from 'next/image';
import Head from 'next/head';
import dispalyPic from '../../assets/images/project/project.png';
import shekaniNew from '../../assets/images/shekani_new.jpg';
import PrimaryFooter from '../../components/footer/primaryFooter';
import Productsp from '../../assets/data/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Axios from 'axios';
const HomePage = () => {
  const [dataFull, setDataFull] = useState<any>();
  const [dataFull2, setDataFull2] = useState<any>();
  const [limit, setLimit] = useState(18); // Number of words to display
  const router = useRouter();

  useEffect(() => {
    const tempData = async () => {
      try {
        const res = await Axios.get('http://localhost:5000/api/projects');
        console.log(res.data);

        setDataFull2(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    tempData();
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768 && dataFull2 !== undefined) {
      setDataFull(dataFull2.slice(0, 2)); // Set the number of items to 1 for mobile screens
      setLimit(12);
    } else if (dataFull2 !== undefined) {
      setDataFull(dataFull2.slice(0, 3)); // Set the number of items to 3 for desktop screens
    }
  }, [dataFull2]);

  const handleClick = (data: any) => {
    console.log(data);
    router.push({
      pathname: '/individualprojects',
      query: { data: JSON.stringify(data) },
    });
  };

  return (
    <div className="font-montserrat text-linecolor">
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/shekani_new.ico" />
        </Head>
      </>
      <div>
        <Image
          className="w-full absolute z-0 h-[280px] md:h-[800px] top-0 left-0"
          src={background}
          alt=""
        />
        <div className="absolute z-10 grid grid-cols-2 gap-x-2 md:gap-44 ml-6 md:ml-10 items-center ">
          <div className="w-full flex flex-col  md:ml-56 mt-24 md:mt-56">
            <h1 className="text-xl md:text-8xl  font-bold">Full Stack</h1>
            <h1 className="w-3/4 text-2xl md:text-9xl  font-bold">Developer</h1>
            <h1 className="w-3/4 text-base md:text-4xl mt-1 md:mt-5 font-bold">Ahmed Tahir Shekhani</h1>
            <Link className="" href={'/about'}>
              <button className="flex justify-center bg-linecolor text-secondaryText py-2 mt-5 md:mt-10 rounded-[7px] w-[150px] md:w-[250px] hover:bg-secondaryText hover:text-linecolor">
                <div className="flex flex-row items-center">
                  <div className="text-[10px] md:text-lg font-semibold">
                    Check my experience?
                  </div>
                  <i className="fa-sharp fa-solid fa-arrow-right text-[15px] ml-2 md:ml-3 md:text-[20px]"></i>
                </div>
              </button>
            </Link>
          </div>
          <div className="avatar md:pl-10 md:ml-3 pt-12 md:pt-48">
            <div className="rounded-full w-[150px] h-[150px] md:w-[430px] md:h-[430px]">
              <Image src={shekaniNew} alt="Ahmed Tahir Shekhani" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[280px] md:h-[800px]"></div>

      <div className="w-full bg-linecolor h-[420px] md:h-[700px]">
        <h1 className="text-secondaryText text-4xl md:text-7xl  font-semibold md:font-bold px-3 pt-2 md:p-5 md:ml-16">
          Projects
        </h1>
        <div className=" grid grid-cols-2 md:grid-cols-3 place-items-center  mt-3">
          {dataFull && dataFull.length > 0
            ? dataFull.map((data: any) => {
              return (
                <div key={data.id}>
                  <div className="md:w-[400px] md:h-[450px] w-[175px] h-[220px] ">
                    <div className="border-2 bg-linecolor border-primaryBackground w-[170px] h-[260px] md:w-[340px] md:h-[405px] rounded-2xl md:rounded-3xl text-center shadow-[10px_10px_0_0_rgba(0,0,0,0.2)] md:shadow-[30px_30px_0_0_rgba(0,0,0,0.2)] md:hover:w-[350px] md:hover:h-[415px] ">
                      <Image
                        className="md:rounded-t-3xl rounded-t-2xl border-b-2 border-primaryBackground"
                        src={data.image[0]}
                        alt="project display picture"
                        width="340"
                        height="405"
                        style={{ objectFit: 'cover', width: '100%', height: '47%' }}
                      />
                      <h1 className="text-sm md:text-xl h-10 md:h-14 text-secondaryText mt-2 md:mt-4 font-bold ">
                        {data.heading}
                      </h1>
                      <p className="ml-2 mr-2 mb-2 text-xs md:text-base h-11 md:h-20 text-primaryBackground text-left md:w-[320px] mx-1 md:mx-3 mt-1 ">
                        {data.description.split(' ').slice(0, limit).join(' ')}
                        {' ... '}
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
        <div className="w-full text-center mt-16 md:mt-8 pb-12">
          <Link
            className=" md:w-24 text-xl font-montserrat font-normal"
            href={'/projectsDisplay'}
          >
            <button className="bg-primaryBackground text-linecolor py-2 rounded-[10px] md:w-52 md:h-16 hover:text-primaryBackground hover:bg-linecolor hover:outline">
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
