// import PrimaryNavbar from "../../../components/navbar/primary";
import PrimaryNavbar from '../../components/navbar/primary';
import Head from 'next/head';
import Image from 'next/image';
import background from '../../assets/images/background/background.png';
import shekaniNew from '../../assets/images/shekani_new.jpg';
import PrimaryFooter from '../../components/footer/primaryFooter';
import ProjectsSlider from '../../components/projetsSlider/ProjectsSlider';

const ProjectsDisplay = () => {
  return (
    <div className="bg-primaryBackground font-montserrat text-linecolor">
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/shekani_new.ico" />
        </Head>
      </>
      <PrimaryNavbar />
      <div>
        <Image
          className="w-full absolute z-0 h-[800px] top-0 left-0"
          src={background}
          alt=""
        />
      </div>
      <div className='absolute z-10 w-full flex justify-center mt-48'>
        <ProjectsSlider></ProjectsSlider>
      </div>
    
      <div className='w-full h-[800px] top-0 left-0'>
      </div>

        <PrimaryFooter></PrimaryFooter> 
    </div>

  );
};

export default ProjectsDisplay;


