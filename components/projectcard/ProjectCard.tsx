import Image from 'next/image';
import dispalyPic from '../../assets/images/project/project.png';
const ProjectCard = () => {
  return (
    <div className="w-[500px] h-[550px]">
      <div className="border-2 border-primaryBackground w-[460px] h-[490px] rounded-3xl text-center shadow-[30px_30px_0_0_rgba(0,0,0,0.2)] hover:w-[470px] hover:h-[510px] ">
        <Image
          className="rounded-t-3xl border-b-2 border-primaryBackground"
          src={dispalyPic}
          alt="project display picture"
        />
        <h1 className="text-5xl text-primaryBackground mt-4 font-bold">
          BitGift
        </h1>
        <p className="text-2xl text-primaryBackground text-left w-[430px] mx-2 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus
          mi.
        </p>
        <div className='w-full mt-2 text-right'>
        <button className="bg-secondaryText text-linecolor py-2 mx-3 rounded-[7px] w-40 ">
          <div className="flex flex-row">
            <div className="text-lg font-semibold ml-4">Read More</div>
            <i className="fa-sharp fa-solid fa-arrow-right text-linecolor text-[20px] ml-5 mt-1"></i>
          </div>
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
