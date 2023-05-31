import ResumeImage from "../../components/resumeimage";
import HomeContent from "../../components/homecontent";
import HomeSkills from "../../components/homecontent/skills";

import Head from "next/head";

const HomePage = () => {
  return (
    <div className="container mx-auto my-10">
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/icon.ico" />
        </Head>
      </>
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-4 mb-10">
          <div>
            <ResumeImage />
          </div>
          <div className="col-span-2">
            <HomeContent />
          </div>
        </div>
        <div>
          <div className="rounded-lg bg-primary text-black p-2 my-5">
            <h1 className="text-3xl font-bold">My Skills</h1>
          </div>
          <h1 className="text-2xl font-medium m-4">Languages:</h1>

          <HomeSkills />
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
