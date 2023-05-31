// import PrimaryNavbar from "../../../components/navbar/primary";
import PrimaryNavbar from '../../components/navbar/primary';
import Head from 'next/head';
import Image from 'next/image';
import background from '../../assets/images/background/background.png';
import shekaniNew from '../../assets/images/shekani_new.jpg';
import Education from '../../components/education';
import PrimaryFooter from '../../components/footer/primaryFooter';
import Work from '../../components/workexperience';
import Skills from '../../components/skills';
import Extracurr from '../../components/extracurriculars/Extracurr';
import ProjAbout from '../../components/projAbout/ProjAbout';

const About = () => {
  return (
    <div className="bg-primaryBackground font-montserrat">
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/icon.ico" />
        </Head>
      </>
      <PrimaryNavbar />
      <div>
        <Image
          className="w-screen absolute z-0 h-[500px] md:h-[800px] top-0 left-0"
          src={background}
          alt=""
        />
        <div className="md:flex absolute z-10 md:flex-row md:gap-x-20 pt-24 md:mt-48 md:ml-48 ">
          <div className="avatar ml-[28%] md:pl-10 md:ml-3">
            <div className="rounded-full w-44 md:w-96 ">
              <Image src={shekaniNew} alt="Ahmed Tahir Shekhani" />
            </div>
          </div>

          <div className="flex flex-col gap-y-10 w-96 md:w-1/2 pt-12 px-8 text-center md:text-left text-lg">
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
      <div className="w-full h-[950px] md:h-[800px]"></div>
      <div className="md:mx-44">
        <Education></Education>
        <Work></Work>
        <ProjAbout></ProjAbout>
        <Skills></Skills>
        
        <Extracurr></Extracurr>
      </div>
      <PrimaryFooter></PrimaryFooter>
    </div>
  );
};

export default About;
