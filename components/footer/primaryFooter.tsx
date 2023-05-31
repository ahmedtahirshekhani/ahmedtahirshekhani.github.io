import Link from "next/link";
// import FontAwesomeIcon from FontAwesomeIcon

const PrimaryFooter = () => {
  return (
    <div className="font-montserrat">
      <footer className="w-full relative bottom-0 bg-footercolor text-center">
        <div className="my-3 md:my-5">
          <h1 className="font-bold text-2xl md:text-3xl pt-3 md:pt-7">CONTACT ME</h1>
        </div>
        <div className="flex text-xs font-bold md:text-2xl  md:mx-3 justify-center md:mx-96">
          <div className="flex flex-row gap-2 md:gap-5 my-2  md:mr-24">
            <i className="fa-solid fa-phone text-white text-[15px] md:text-[28px] md:ml-5 md:mt-1"></i>
            <a
              href="tel:0092-321-25-75665"
              className="text-black"
              target="_blank"
              rel="noreferrer"
            >
              {" 0092-321-25-75665"}
            </a>
          </div>

          <div className="flex flex-row  gap-2 md:gap-5 my-2">
            <i className="fa-solid fa-envelope text-white text-[15px] md:text-[28px] ml-5 md:mt-1"></i>
            <a
              href="mailto:ahmedtahir2000@gmail.com"
              className="text-black"
              target={"_blank"}
              rel="noreferrer"
            >
              {" ahmedtahir2000@gmail.com"}
            </a>
          </div>
        </div>
        <div className=" pb-7 ">
          <div className="flex  my-5  space-x-14 pb-1 justify-center ">
            <a
              href="
              https://github.com/ahmedtahirshekhani"
              className="text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github text-black text-[35px]"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/12695074/ahmed-tahir-shekhani"
              className="text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-stack-overflow text-black text-[35px]"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedtahirshekhani/"
              className="text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin text-black text-[35px]"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrimaryFooter;
