import background from '../../assets/images/background/background.png';
import Image from 'next/image';
import ProjectCard from '../../components/projectcard/ProjectCard';
import Head from 'next/head';

import PrimaryFooter from '../../components/footer/primaryFooter';
import Productsp from '../../assets/data/data';
import Link from 'next/link';

import { useRouter } from 'next/router';
import PrimaryNavbar from '../../components/navbar/primary';


const IndividualProjects = (props: any) => {
    const router = useRouter();
    const { data }: any = router.query;
    const parsedData = JSON.parse(data);

    console.log("DATA WE GOT IS: ", parsedData);


    return (
        <div>
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
            <div className='bg-primaryBackground'>

                <div className="w-full h-[800px]"></div>
                <div className='mx-44 pb-28'>
                    <h1 className="text-6xl font-bold font-roboto mt-20 text-secondaryText">{parsedData.heading}</h1>
                    <p className='text-roboto text-lg'>A crypto-currency gifting application.</p>

                    <div className='flex flex-col mt-10 font-roboto gap-y-10'>
                        <div>
                            <h1 className='text-secondaryText text-2xl '>Description</h1>
                            <p>{parsedData.description}.</p>
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
                </div>
            </div>
            
            <PrimaryFooter></PrimaryFooter>


        </div>

    );
};

export default IndividualProjects;
