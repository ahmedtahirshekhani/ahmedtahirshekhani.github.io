import PrimaryNavbar from "../../components/navbars/primary";
import PrimaryFooter from "../../components/footers/primaryFooter";
import Head from "next/head";
const Contact = () => {
  return (
    <div >
      <>
        <Head>
          <title>Ahmed Tahir Shekhani</title>
          <link rel="shortcut icon" href="/icon.ico" />
        </Head>
      </>
      <PrimaryNavbar />
      <div className="text-4xl font-bold text-center my-5">Contact Me!</div>
      
        <div className="mx-3 mb-10 md:mx-auto md:w-1/2 rounded-lg bg-slate-50 p-5">
          <div className="text-xl font-bold text-center text-black">
            Following is my contact information:
          </div>
          {/* contact information with icon */}
          <div className="flex flex-col my-5">

            {/* Email address information */}
            <div className="grid grid-cols-10 pl-1 md:flex md:flex-row md:items-center md:m-1">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"></path>
              </svg>
              <div className="flex flex-row items-center">
                <div className=" font-bold text-black ml-3">Email:</div>
                <div className="font-bold text-black ml-2">
                  <a
                    href="mailto:ahmedtahir2000@gmail.com"
                    className="text-blue-700"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {"ahmedtahir2000@gmail.com"}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone number information */}
            <div className="flex flex-row items-center pl-1 md:m-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
              </svg>
              <div className=" font-bold  text-black mt-1 ml-1 md:ml-3">Call / Whatsapp:</div>
              <div className="font-bold text-black mt-1 ml-2">
                <a
                  href="tel:0092-321-25-75665"
                  className="text-blue-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  {"0092-321-25-75665"}
                </a>
              </div>
            </div>

            {/* GitHUb information */}
            <div className="grid grid-cols-10 pl-1 md:flex md:flex-row md:items-center md:m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 50 50"
              >
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
              </svg>
              <div className="flex flex-row items-center">
                <div className=" font-bold text-black md:mt-1 ml-3">Github Username:</div>
                <div className="font-bold text-black md:mt-1 ml-2">
                  <a
                    href="
                    https://github.com/ahmedtahirshekhani"
                    className="text-blue-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"ahmedtahirshekhani"}
                  </a>
                </div>
              </div>
            </div>  

            {/* Linkedin Information*/}
            <div className="grid grid-cols-10 pl-1 md:flex md:flex-row md:items-center md:m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
              <div className="flex flex-row items-center">
                <div className=" font-bold text-black md:mt-1 ml-3">Linkedin Username:</div>
                <div className="font-bold text-black md:mt-1 ml-2">
                  <a
                    href="https://www.linkedin.com/in/ahmedtahirshekhani/"
                    className="text-blue-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"ahmedtahirshekhani"}
                  </a>
                </div>
              </div>
            </div>

            {/* StackOverflow */}
            <div className="grid grid-cols-10 pl-1 md:flex md:flex-row md:items-center md:m-1" > 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 50 50"
              >
                <path fill="#607D8B" d="M9 28H12V42H9z"></path>
                <path fill="#607D8B" d="M9 39H35V42H9z"></path>
                <path fill="#607D8B" d="M32 28H35V42H32zM15 34H29V37H15z"></path>
                <path
                  fill="#A68A6E"
                  d="M14.88 29H28.880000000000003V32H14.88z"
                  transform="rotate(6.142 21.88 30.5)"
                ></path>
                <path
                  fill="#EF6C00"
                  d="M29.452 11.646H43.451V14.647H29.452z"
                  transform="rotate(81.234 36.453 13.148)"
                ></path>
                <path
                  fill="#FF9800"
                  d="M23.576 13.578H37.574V16.579H23.576z"
                  transform="rotate(60.79 30.576 15.079)"
                ></path>
                <path
                  fill="#D38B28"
                  d="M18.395 18.275H32.393V21.276H18.395z"
                  transform="rotate(34.765 25.396 19.777)"
                ></path>
                <path
                  fill="#C09553"
                  d="M15.977 23.499H29.976V26.5H15.977z"
                  transform="rotate(19.785 22.978 25.003)"
                ></path>
              </svg>
              <div className="flex flex-row items-center">
                <div className=" font-bold text-black md:mt-1 ml-3">
                  StackOverflow Username:
                </div>
                <div className="font-bold text-black md:mt-1 ml-2">
                  <a
                    href="https://stackoverflow.com/users/12695074/ahmed-tahir-shekhani"
                    className="text-blue-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"ahmedtahirshekhani"}
                  </a>
                </div>
              </div>
            </div>  
          </div>
        </div>
        <div className="h-48 m-4 md:h-72 md:m-7" ></div>
      <PrimaryFooter />
    </div>
  );
};

export default Contact;
