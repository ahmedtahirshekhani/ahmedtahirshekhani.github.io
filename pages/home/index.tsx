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

const HomePage = () => {
  let dataFull = Productsp.slice(0, 3);
  const router = useRouter();

  const handleClick = (data: any) => {
    router.push({
      pathname: '/individualprojects',
      query: { data: JSON.stringify(data) },
    });
  };

  return (
    <div>
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/icon.ico" />
        </Head>
      </>
      <div>
        <Image
          className="w-full absolute z-0 h-[800px] top-0 left-0"
          src={background}
          alt=""
        />
        <div className="absolute z-10 grid grid-cols-2 gap-44 ml-10">
          <div className="w-full flex flex-col gap-y-6 ml-56 mt-56">
            <h1 className=" text-8xl font-roboto font-bold">Full Stack</h1>
            <h1 className="w-3/4 text-9xl font-roboto font-bold">Developer</h1>
            <Link className="" href={'/about'}>
              <button className="bg-linecolor text-secondaryText py-2 mt-10 rounded-[7px] w-[330px] hover:bg-secondaryText hover:text-linecolor">
                <div className="flex flex-row">
                  <div className="text-lg font-semibold ml-4">
                    Want to know more about me?
                  </div>
                  <i className="fa-sharp fa-solid fa-arrow-right text-[20px] ml-5 mt-1"></i>
                </div>
              </button>
            </Link>
          </div>
          <div className="avatar md:pl-10 md:ml-3 pt-48">
            <div className="rounded-full w-[430px] ">
              <Image src={shekaniNew} alt="Ahmed Tahir Shekhani" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[800px]"></div>
      <div className="w-full bg-linecolor h-[800px]">
        <h1 className="text-secondaryText text-7xl font-bold p-5 ml-16">
          Projects
        </h1>
        <div className=" grid grid-cols-3 place-items-center m-5">
          {dataFull && dataFull.length > 0
            ? dataFull.map((data: any) => {
                return (
                  <div key={data.id}>
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
                        <div className="w-full mt-2 text-right ">
                          <button
                            className="bg-secondaryText text-linecolor py-2 mx-3 rounded-[7px] hover:text-secondaryText hover:bg-linecolor hover:outline w-40"
                            onClick={() => handleClick(data)}
                          >
                            <div className="flex flex-row ">
                              <div className="text-lg font-semibold ml-4">
                                Read More
                              </div>
                              <i className="fa-sharp fa-solid fa-arrow-right text-[20px] ml-5 mt-1"></i>
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
        <div className="w-full text-center pb-12">
          <Link
            className="normal-case w-24 text-xl font-roboto font-normal"
            href={'/projectsDisplay'}
          >
            <button className="bg-secondaryText text-linecolor py-2 rounded-[10px] w-52 h-16 hover:text-secondaryText hover:bg-linecolor hover:outline">
              <div className="flex flex-row">
                <div className="text-3xl ml-4">See More</div>
                <i className="pt-0.5 a-sharp fa-solid fa-arrow-right  text-[35px] ml-5 "></i>
              </div>
            </button>
          </Link>
        </div>
        <PrimaryFooter></PrimaryFooter>
      </div>
    </div>
  );
};

export default HomePage;
