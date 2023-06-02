import background from '../../assets/images/background/background.png';
import Image from 'next/image';
import Head from 'next/head';
import dispalyPic from '../../assets/images/project/project.png';
import PrimaryFooter from '../../components/footer/primaryFooter';
import { useRouter } from 'next/router';
import PrimaryNavbar from '../../components/navbar/primary';
import { useState } from 'react';
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

const IndividualProjects = () => {
  let images: any = [dispalyPic];
  const [parsedData, setParsedData] = useState<any>();
  const router = useRouter();
  const { data }: any = router.query;

  useEffect(()=>{

    if (data !== undefined)
    {
      setParsedData(JSON.parse(data));

    }
  }, [parsedData, data])
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  const increment = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const decrement = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShowImage(true);
      }, 500); // Transition duration in milliseconds
    }, 5000); // Transition delay in milliseconds

    return () => clearInterval(interval);
  }, [images.length, showImage]);

  return (
    <div className="font-montserrat">
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/shekani_new.ico" />
        </Head>
      </>
      <PrimaryNavbar />
      <div>
        <Image
          className="w-screen absolute z-0 h-[600px] md:h-[800px] top-0 left-0"
          src={background}
          alt=""
        />
      </div>

      <div className="absolute z-10 mt-40 md:ml-80 flex flex-row justify-center content-center mx-2">
        <button>
          <i
            className="fa-solid fa-arrow-left text-linecolor text-[30px] mr-2 md:mr-10 md:ml-5 "
            onClick={decrement}
          ></i>
        </button>
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
              src={images[currentIndex]}
              alt="Image"
              className="rounded-t-xl border-b-2 border-primaryBackground md:w-[1000px] h-[350px] md:h-[590px] rounded-3xl"
            />
          </Transition>
        </div>
        <button>
          <i
            className="fa-solid fa-arrow-right text-linecolor text-[30px] ml-2 md:ml-10"
            onClick={increment}
          ></i>
        </button>
      </div>

      <div className="bg-primaryBackground">
        <div className="w-full h-[600px] md:h-[800px] bg-primaryBackground"></div>
        <div className="mx-10 md:mx-44 pb-28">
          {parsedData ? (
            <h1 className="text-4xl md:text-6xl font-bold md:mt-20 text-secondaryText">
              {parsedData.heading}
            </h1>
          ) : (
            []
          )}

          <p className=" text-lg">A crypto-currency gifting application.</p>

          <div className="flex flex-col mt-10 gap-y-10">
            <div>
              <h1 className="text-secondaryText text-2xl ">Description</h1>
              {parsedData ? <p>{parsedData.description}.</p> : []}
            </div>
            <div>
              <h1 className="text-secondaryText text-2xl ">Technology Used</h1>
              {parsedData ? <p>{parsedData.tech}.</p> : []}
            </div>
            <div>
              <h1 className="text-secondaryText text-2xl ">Duration</h1>
              {parsedData ? <p>{parsedData.duration}.</p> : []}
            </div>
          </div>
        </div>
        <PrimaryFooter></PrimaryFooter>
      </div>
    </div>
  );
};

export default IndividualProjects;
