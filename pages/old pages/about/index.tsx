import PrimaryNavbar from "../../../components/navbars/primary";
import HomeSkills from "../../../components/homecontent/skills";
import EduSection from "../../../components/education/edusection";
import HonorsAwardsSection from "../../../components/honorsec";
import ProfessionalDevSection from "../../../components/professionaldev";
import WorkExpSection from "../../../components/workexp";
import ProjectSection from "../../../components/projects";
import SkillSection from "../../../components/skills";
import ExtracurricularSec from "../../../components/extracurriculars";
import PrimaryFooter from "../../../components/footers/primaryFooter";
import Head from "next/head";
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
      <div className="container mx-auto my-10">
        <div className="rounded-lg bg-white text-black p-2 my-5 mx-2">
          <div className="text-2xl md:text-3xl font-bold">Education</div>
        </div>
        <EduSection />
        <div className="rounded-lg bg-white text-black p-2 my-5 mx-2">
          <div className="text-2xl md:text-3xl font-bold ">
            Honors and Awards
          </div>
        </div>
        <HonorsAwardsSection />
        <div className="rounded-lg bg-white text-black p-2 my-5 mx-2">
          <div className="text-2xl md:text-3xl font-bold">
            Professional Development
          </div>
        </div>
        <ProfessionalDevSection />
        <div className="rounded-lg bg-white text-black p-2 my-5 mx-2">
          <div className="text-2xl md:text-3xl font-bold">Work Expereince</div>
        </div>
        <WorkExpSection />
        <div className="rounded-lg bg-white text-black p-2 my-5 mx-2">
          <div className="text-2xl md:text-3xl font-bold">Projects</div>
        </div>
        <ProjectSection />
        <div className="rounded-lg bg-white text-black p-2 my-5 mx-2">
          <div className="text-2xl md:text-3xl font-bold">Skills</div>
        </div>
        <SkillSection />
        <div className="rounded-lg bg-white text-black p-2 my-5 mx-2">
          <div className="text-2xl md:text-3xl font-bold">Extracurricular</div>
        </div>
        <ExtracurricularSec />
      </div>
      <PrimaryFooter />
    </div>
  );
};

export default About;
