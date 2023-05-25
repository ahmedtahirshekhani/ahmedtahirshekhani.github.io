import Image from 'next/image';
import dispalyPic from '../../assets/images/project/project.png';
import Link from 'next/link';



const ProjectCard = (props:any) => {
  let description = props.data.description;
  let heading = props.data.heading;
  let image = props.data.image;

  return (
    <div className="w-[400px] h-[450px]">
      <div className="border-2 bg-linecolor border-primaryBackground w-[340px] h-[405px] rounded-3xl text-center shadow-[30px_30px_0_0_rgba(0,0,0,0.2)] hover:w-[350px] hover:h-[415px] ">
        <Image
          className="rounded-t-3xl border-b-2 border-primaryBackground"
          src={dispalyPic}
          alt="project display picture"
        />
        <h1 className="text-5xl text-secondaryText mt-4 font-bold ">
          {heading}
        </h1>
        <p className="text-2xl h-20 text-primaryBackground text-left w-[430px] mx-4 mt-3">
          {description}
        </p>
        <div className='w-full mt-2 text-right'>
        <button className="bg-secondaryText text-linecolor py-2 mx-3 rounded-[7px] w-40">
          <div className="flex flex-row">
          <Link
              className="normal-case w-28 text-xl font-roboto font-normal  hover:font-bold hover:underline underline-offset-3"
              href={{
                pathname: '/individualprojects',
                query: {data:props.data}
              }}
              as="/individualprojects"
            >
            <div className="text-lg font-semibold ml-4">Read More</div>
            </Link>
            <i className="fa-sharp fa-solid fa-arrow-right text-linecolor text-[20px] ml-5 mt-1"></i>
          </div>
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
