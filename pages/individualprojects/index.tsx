import background from '../../assets/images/background/background.png';
import Image from 'next/image';
import ProjectCard from '../../components/projectcard/ProjectCard';
import Head from 'next/head';

import PrimaryFooter from '../../components/footer/primaryFooter';
import Productsp from '../../assets/data/data';
import Link from 'next/link';

import { useRouter } from 'next/router';


const IndividualProjects = (props: any) => {
    const router = useRouter();
    const { data } = router.query;


    console.log("THE DATA WE GOT IS: ", data);
    let dataFull = Productsp.slice(0, 3)
    return (
        <div>
            <>
                <Head>
                    <title>Ahmed Tahir Shekhani</title>
                    <link rel="shortcut icon" href="/icon.ico" />
                </Head>
            </>
            <div>
                <Image
                    className="w-screen absolute z-0 h-[800px] top-0 left-0"
                    src={background}
                    alt=""
                />
                <div className="absolute z-10">
                    <div className="flex flex-col gap-y-6 ml-48 mt-48">
                        <h1 className="w-3/4 text-9xl font-roboto font-bold">
                            Discover the Potential
                        </h1>
                        <Link className='' href={'/projectsDisplay'}>

                            <button className="bg-linecolor text-secondaryText py-2 rounded-[7px] w-36 hover:bg-secondaryText hover:text-linecolor">
                                <div className="flex flex-row">
                                    <div className="text-lg font-semibold ml-4">EXPLORE</div>
                                    <i className="fa-sharp fa-solid fa-arrow-right text-[20px] ml-5 mt-1"></i>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-[800px]"></div>
            <div className="w-full bg-linecolor h-[800px]">
                <h1 className="text-secondaryText text-7xl font-bold p-5 ml-16">
                    Projects
                </h1>
                <div className=" grid grid-cols-3 place-items-center m-5">
                    {dataFull && dataFull.length > 0
                        ? dataFull.map((data: any) => {
                            return (
                                <div>
                                    <ProjectCard data={data}></ProjectCard>

                                </div>
                            );
                        })
                        : ''}
                </div>
                <div className='w-full text-center'>
                    <Link
                        className="normal-case w-24 text-xl font-roboto font-normal hover:font-bold hover:underline underline-offset-3"
                        href={'/projectsDisplay'}
                    >
                        <button className="bg-secondaryText text-linecolor py-2 rounded-[7px] w-52 h-16">
                            <div className="flex flex-row">
                                <div className="text-3xl  ml-3 ">
                                    See More
                                </div>
                                <i className="fa-sharp fa-solid fa-arrow-right text-linecolor text-[35px] ml-5 mt-1"></i>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IndividualProjects;
