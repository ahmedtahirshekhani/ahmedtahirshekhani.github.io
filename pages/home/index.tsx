// import ResumeImage from "../../components/resumeimage";
// import HomeContent from "../../components/homecontent";
// import HomeSkills from "../../components/homecontent/skills";
import background from "../../assets/images/background/background.png"
import Image from "next/image";

import Head from "next/head";
const HomePage = () => {
  return (
    <div>
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/icon.ico" />
        </Head>
      </>
      <Image className="w-screen absolute" src={background} alt="" />
      <div className="flex absolute z-10 flex-col gap-y-6">
        <h1 className="w-3/4 text-9xl ml-48 mt-48 font-roboto font-bold">Discover the Potential</h1>

        <button className="bg-white text-teal-600 py-2 rounded-[7px] ml-48 w-36">
        <div className="flex flex-row">
          <div className="text-lg font-semibold ml-4">
            EXPLORE
          </div>
          <i className="fa-sharp fa-solid fa-arrow-right text-teal-600 text-[20px] ml-5 mt-1"></i>
        </div>
        </button>

        
      </div>
    </div>
  );
};

export default HomePage;
