import background from "../../assets/images/background/background.png"
import Image from "next/image";

import Head from "next/head";
import PrimaryFooter from "../../components/footer/primaryFooter";
const HomePage = () => {
  return (
    <div>
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/icon.ico" />
        </Head>
      </>
      <Image className="w-full absolute top-0 left-0 h-screen" src={background} alt="" />
      <div className="absolute z-10">

        <div className="flex flex-col gap-y-6 ml-48 mt-48">
          <h1 className="w-3/4 text-9xl font-roboto font-bold">Discover the Potential</h1>

          <button className="bg-linecolor text-secondaryText py-2 rounded-[7px] w-36">
            <div className="flex flex-row">
              <div className="text-lg font-semibold ml-4">
                EXPLORE
              </div>
              <i className="fa-sharp fa-solid fa-arrow-right text-secondaryText text-[20px] ml-5 mt-1"></i>
            </div>
          </button>

        </div>

        <div className="pt-44">
          <PrimaryFooter></PrimaryFooter>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
