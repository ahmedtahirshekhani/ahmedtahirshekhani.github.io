import PrimaryNavbar from "../../components/navbars/primary";
import HomeSkills from "../../components/homecontent/skills";
import EduSection from "../../components/education/edusection";
import HonorsAwardsSection from "../../components/honorsec";

const About = () => {
  return (
    <div>
      <PrimaryNavbar />
      <div className="container mx-auto my-10">
        <div className="rounded-lg bg-white text-black p-2 my-5">
          <div className="text-3xl font-bold">Education</div>
        </div>
        <EduSection />
        <div className="rounded-lg bg-white text-black p-2 my-5">
          <div className="text-3xl font-bold">Honors and Awards</div>
        </div>
        <HonorsAwardsSection />
        <div className="rounded-lg bg-white text-black p-2 my-5">
          <div className="text-3xl font-bold">Professional Development</div>
        </div>
      </div>
    </div>
  );
};

export default About;
