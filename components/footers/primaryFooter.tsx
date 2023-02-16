import Link from "next/link";
// import FontAwesomeIcon from FontAwesomeIcon

const PrimaryFooter = () => {
  return (
    <div>
      <footer className=" grid grid-cols-1 space-x-16 md:grid-cols-3 md:footer md:space-x-20  md:py-7 md:pl-20 bg-primary text-neutral-content">
        <div className=" font-bold text-center text-black md:text-lg md:pt-3 md:pl-20">
          <p>
            Phone:
            <a
              href="tel:0092-321-25-75665"
              className="text-black"
              target="_blank"
              rel="noreferrer"
            >
              {" 0092-321-25-75665"}
            </a>
          </p>
        </div>
        <div className=" font-bold  text-black md:text-lg md:pt-3 md:pl-3">
          <p>
            Email:
            <a
              href="mailto:ahmedtahir2000@gmail.com"
              className="text-black"
              target={"_blank"}
              rel="noreferrer"
            >
              {" ahmedtahir2000@gmail.com"}
            </a>
          </p>
        </div>

        <div>
          <div className="flex ml-3 md:ml-0 space-x-10 pb-1 pl-5">
            <a
              href="
              https://github.com/ahmedtahirshekhani"
              className="text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github text-black text-[40px]"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/12695074/ahmed-tahir-shekhani"
              className="text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-stack-overflow text-black text-[40px]"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedtahirshekhani/"
              className="text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin text-black text-[40px]"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrimaryFooter;
