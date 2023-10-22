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
import Link from 'next/link';

const IndividualProjects = () => {
  const [parsedData, setParsedData] = useState<any>();
  const router = useRouter();
  const { data }: any = router.query;

  useEffect(() => {
    if (data !== undefined) {
      console.log("chal ley pleaseeee yaaarrr", data);
      
      setParsedData(JSON.parse(data));
    }
  }, [data]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  const increment = () => {
    if (
      parsedData !== undefined &&
      currentIndex < parsedData.image.length - 1
    ) {
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
        if (parsedData !== undefined) {
          setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % parsedData.image.length
          );
          setShowImage(true);
        }
      }, 500); // Transition duration in milliseconds
    }, 5000); // Transition delay in milliseconds

    return () => clearInterval(interval);
  }, [parsedData, showImage]);

  return (
    <div className="font-montserrat text-linecolor">
      <>
        <Head>Axios
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/shekani_new.ico" />
        </Head>
      </>
      <PrimaryNavbar />
      <div>
        <Image
          className="w-full absolute z-0 h-[500px] md:h-[800px] top-0 left-0"
          src={background}
          alt=""
        />
      </div>

      <div className="absolute z-10 mt-40 w-full flex flex-row justify-center content-center px-2 md:px-0">
        <button>
          <i
            className="fa-solid fa-arrow-left text-linecolor text-[30px] mr-2 md:mr-10  "
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
            {parsedData ? (
              <Image
                src={parsedData.image[currentIndex]}
                alt="Image"
                className="rounded-t-xl border-b-2 border-primaryBackground md:w-[1000px] h-[280px] md:h-[590px] rounded-3xl"
                width="340"
                height="405"
              />
            ) : (
              []
            )}
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
        <div className="w-full h-[500px] md:h-[800px] bg-primaryBackground"></div>
        <div className="mx-10 md:mx-44 pb-28">
          {parsedData ? (
            <h1 className="text-4xl md:text-6xl font-bold md:mt-20 text-secondaryText">
              {parsedData.heading}
            </h1>
          ) : (
            []
          )}

          <div className="flex flex-col mt-10 gap-y-10">
            <div>
              <h1 className="text-secondaryText text-2xl ">Description</h1>
              {parsedData ? <p>{parsedData.description}</p> : []}
            </div>
            <div>
              <h1 className="text-secondaryText text-2xl ">
                Skills and deliverables
              </h1>
              {parsedData ? (
                <div className=" grid grid-cols-4 text-sm md:text-l ">
                  {parsedData.tech.map((item:any, index:any) => (
                    <p key={index} className="font-normal">{item}</p>
                  ))}
                </div>
              ) : (
                []
              )}
            </div>
            <div>
              <h1 className="text-secondaryText text-2xl ">Link</h1>
              {parsedData && parsedData.link !== undefined ? <Link href={parsedData.link}><p className='hover:text-secondaryText'>{parsedData.link}</p></Link> : "--"}
            </div>
          </div>
        </div>
        <PrimaryFooter></PrimaryFooter>
      </div>
    </div>
  );
};

export default IndividualProjects;
