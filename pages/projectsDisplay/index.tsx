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
        <div className="flex absolute z-10 flex-row gap-x-20 mt-48 ml-48">
          <div className="avatar md:pl-10 md:ml-3">
            <div className="rounded-full w-96 h-96">
              <Image src={shekaniNew} alt="Ahmed Tahir Shekhani" />
            </div>
          </div>

          <div className="flex flex-col gap-y-10 w-1/2 pt-12 text-lg">
            <p>
              A passionate and experienced FULL-STACK DEVELOPER and a DIGITAL
              MARKETING CONSULTANT who can solve your technical problem in the
              easiest, most desirable, and promotional ways.
            </p>
            <p>
              I am a solution to your problem. I tell my clients to not look at
              my winners but look at my losers because they are very few ~ from
              The Wolf of Wall Street{' '}
            </p>
            <p>
              I always believe in 100% quality service and time. Being an
              experienced strategist I can provide you any guidance on text or
              live chat. So don't hesitate to contact me.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[800px]"></div>
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
        <ProjectsSlider></ProjectsSlider>



      </div>
      <PrimaryFooter></PrimaryFooter>
    </div>
  );
};

export default ProjectsDisplay;
