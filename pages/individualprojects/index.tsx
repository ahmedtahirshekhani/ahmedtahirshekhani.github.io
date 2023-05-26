import background from '../../assets/images/background/background.png';
import Image from 'next/image';
import Head from 'next/head';
import dispalyPic from '../../assets/images/project/project.png';
import shekhaniNew from '../../assets/images/shekani_new.jpg';
import ahmed from '../../assets/images/ahmed.png';
import ahmed2 from '../../assets/images/ahmed2.jpg';
import ahmed3 from '../../assets/images/ahmed3.jpg';
import PrimaryFooter from '../../components/footer/primaryFooter';
import { useRouter } from 'next/router';
import PrimaryNavbar from '../../components/navbar/primary';
import { useState } from 'react';
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

const IndividualProjects = (props: any) => {
    let images: any = [dispalyPic, shekhaniNew, ahmed, ahmed2, ahmed3]
    const router = useRouter();
    const { data }: any = router.query;
    const parsedData = JSON.parse(data);


    const [currentIndex, setCurrentIndex] = useState(0);
    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowImage(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setShowImage(true);
            }, 500); // Transition duration in milliseconds
        }, 3000); // Transition delay in milliseconds

        return () => clearInterval(interval);
    }, [showImage]);

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

            <div className='absolute z-10 mt-40 ml-80 flex flex-row justify-center content-center'>
                <div className="relative ">
                    <Transition
                        show={showImage}
                        enter="transition-opacity duration-700"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Image
                            src={images[0]}
                            alt="Image"
                            className="rounded-t-xl border-b-2 border-primaryBackground w-[900px] h-[520px] rounded-3xl"
                        />
                    </Transition>
                </div>

            </div>

            <div className='bg-primaryBackground'>

                <div className="w-full h-[800px] bg-primaryBackground"></div>
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
                <PrimaryFooter></PrimaryFooter>
            </div>
        </div>

    );
};

export default IndividualProjects;
