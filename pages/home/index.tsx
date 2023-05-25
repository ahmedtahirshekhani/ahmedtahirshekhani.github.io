import background from '../../assets/images/background/background.png';
import Image from 'next/image';
import ProjectCard from '../../components/projectcard/ProjectCard';
import Head from 'next/head';
import PrimaryFooter from '../../components/footer/primaryFooter';
const HomePage = () => {
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
          className="w-screen absolute z-0 h-[800px] top-0 left-0"
          src={background}
          alt=""
        />
        <div className="absolute z-10">
          <div className="flex flex-col gap-y-6 ml-48 mt-48">
            <h1 className="w-3/4 text-9xl font-roboto font-bold">
              Discover the Potential
            </h1>

            <button className="bg-linecolor text-secondaryText py-2 rounded-[7px] w-36">
              <div className="flex flex-row">
                <div className="text-lg font-semibold ml-4">EXPLORE</div>
                <i className="fa-sharp fa-solid fa-arrow-right text-secondaryText text-[20px] ml-5 mt-1"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[800px]"></div>
      <div className="w-full bg-linecolor h-[800px]">
        <h1 className="text-secondaryText text-7xl font-bold p-5 ml-16">
          Projects
        </h1>
        <div className=" grid grid-cols-3 place-items-center m-5">
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
        <div className='w-full text-center'>
          <button className="bg-secondaryText text-linecolor py-2 rounded-[7px] w-52 h-16">
            <div className="flex flex-row">
              <div className="text-3xl  ml-3 ">See More</div>
              <i className="fa-sharp fa-solid fa-arrow-right text-linecolor text-[35px] ml-5 mt-1"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
