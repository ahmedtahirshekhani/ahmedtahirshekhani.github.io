import Link from "next/link";
// import FontAwesomeIcon from FontAwesomeIcon

const PrimaryFooter = () => {
  return (
    <div>
      {/* <footer className="absolute bottom-0 bg-footercolor grid grid-cols-1 space-x-16 md:grid-cols-3 md:footer md:space-x-20  md:py-7 md:pl-20 text-neutral-content "></footer> */}
      <footer className="w-full absolute bottom-0 bg-footercolor text-center">
        <div className="my-5">
          <h1 className="font-bold text-3xl">CONTACT ME</h1>
        </div>
        <div className="flex text-2xl  mx-96">
          <div className="flex flex-row gap-5 my-2 ml-28 mr-24">
            <i className="fa-solid fa-phone text-white text-[28px] ml-5 mt-1"></i>
            <a
              href="tel:0092-321-25-75665"
              className="text-black"
              target="_blank"
              rel="noreferrer"
            >
              {" 0092-321-25-75665"}
            </a>
          </div>

          <div className="flex flex-row gap-5 my-2">
            <i className="fa-solid fa-envelope text-white text-[28px] ml-5 mt-1"></i>
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
        <div className="ml-[43%]">
          <div className="flex ml-3 my-5 md:ml-0 space-x-14 pb-1 pl-5">
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
