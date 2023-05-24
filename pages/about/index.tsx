// import PrimaryNavbar from "../../../components/navbar/primary";
import PrimaryNavbar from "../../components/navbar/primary";
import Head from "next/head";
import Image from "next/image";
import background from "../../assets/images/background/background.png"
import shekaniNew from "../../assets/images/shekani_new.jpg"
import Education from "../../components/education";


// import HomeSkills from "../../../components/homecontent/skills";
// import EduSection from "../../../components/education/edusection";
// import HonorsAwardsSection from "../../../components/honorsec";
// import ProfessionalDevSection from "../../../components/professionaldev";
// import WorkExpSection from "../../../components/workexp";
// import ProjectSection from "../../../components/projects";
// import SkillSection from "../../../components/skills";
// import ExtracurricularSec from "../../../components/extracurriculars";
// import PrimaryFooter from "../../../components/footers/primaryFooter";
const About = () => {
  return (
    <div>
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/icon.ico" />
        </Head>
      </>
      <PrimaryNavbar />
      <Image className="w-screen absolute" src={background} alt="" />
      <div className="flex absolute z-10 flex-row gap-x-20 mt-48 ml-48">
        
        <div className="avatar md:pl-10 md:ml-3">
          <div className="rounded-full w-96 h-96">
            <Image src={shekaniNew} alt="Ahmed Tahir Shekhani" />
          </div>
        </div>

        <div className="flex flex-col gap-y-10 w-1/2 pt-12 text-lg">
          <p>A passionate and experienced FULL-STACK DEVELOPER and a DIGITAL MARKETING CONSULTANT who can solve your technical problem in the easiest, most desirable, and promotional ways.</p>
          <p>I am a solution to your problem. I tell my clients to not look at my winners but look at my losers because they are very few ~ from The Wolf of Wall Street </p>
          <p>I always believe in 100% quality service and time. Being an experienced strategist I can provide you any guidance on text or live chat. So don't hesitate to contact me.</p>
        </div>
      </div>
      <div className="absolute z-10">
        <Education></Education>
      </div>


    </div>
  );
};

export default About;
