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
    <div className="bg-primaryBackground">
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/icon.ico" />
        </Head>
      </>
      <PrimaryNavbar />
      <div>
        <Image
          className="w-screen absolute z-0 h-[800px] top-0 left-0"
          src={background}
          alt=""
        />
      </div>
      <div className='absolute z-10 w-full flex justify-center mt-48'>
        <ProjectsSlider></ProjectsSlider>
      </div>
    
      <div className='w-screen h-[800px] top-0 left-0'>
      </div>

        <PrimaryFooter></PrimaryFooter> 
    </div>

  );
};

export default ProjectsDisplay;

{/* <div className="w-full h-[800px]"></div>
      <div className='mx-44'>
        <h1 className="text-6xl font-bold font-roboto mt-20 text-secondaryText">BitGift</h1>
        <p className='text-roboto text-lg'>A crypto-currency gifting application.</p>

        <div className='flex flex-col mt-10 font-roboto gap-y-10'>
            <div>
                <h1 className='text-secondaryText text-2xl '>Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus,.apien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.</p>
            </div>
            <div>
                <h1 className='text-secondaryText text-2xl '>Technology Used</h1>
                <p>MERN stack, MetaMask </p>
            </div>
            <div>
                <h1 className='text-secondaryText text-2xl '>Duration</h1>
                <p>Aug 2022- Dec 2022</p>
            </div>

        </div>
      </div> */}
