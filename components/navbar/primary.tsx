import React, { useState } from 'react';
import Link from 'next/link';

const PrimaryNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row gap-x-16 md:gap-x-96 md:m-6 absolute z-20 font-montserrat text-linecolor">
      <div className="w-28 md:w-44 m-3">
        <Link
          className="text-base md:text-4xl font-montserrat font-light"
          href={'/'}
        >
          Mr. Shekhani
        </Link>
      </div>
      <div className="hidden md:flex flex-row text-xs md:text-xl gap-x-3 md:gap-x-28 my-4 md:my-2">
        <div className="items-center flex">
          <div className="w-32 h-10 items-center bg-secondaryText flex justify-center rounded-xl hover:text-secondaryText hover:bg-linecolor hover:outline">
            <Link
              className="normal-case font-montserrat font-normal "
              href={'/'}
            >
              Home
            </Link>
          </div>
        </div>
        <div className="items-center flex">
          <div className="w-32 h-10 items-center bg-secondaryText flex justify-center rounded-xl hover:text-secondaryText hover:bg-linecolor hover:outline">
            <Link
              className="font-normal "
              href={'/about'}
            >
              About me
            </Link>
          </div>
        </div>
        <div className="items-center flex">
          <div className="w-32 h-10 items-center bg-secondaryText flex justify-center rounded-xl hover:text-secondaryText hover:bg-linecolor hover:outline">
            <Link
              className="normal-case font-montserrat font-normal "
              href={'/projectsDisplay'}
            >
              Projects
            </Link>
          </div>
        </div>

        <div className="items-center flex">
          <div className="w-32 h-10 items-center bg-secondaryText flex justify-center rounded-xl hover:text-secondaryText hover:bg-linecolor hover:outline">
            <button
              className="m-0 p-0 normal-case font-montserrat font-normal "
              onClick={() => {
                window.scrollTo({
                  top: Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                  ),
                  behavior: 'smooth',
                });
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className="flex flex-col mt-5 drop-shadow-2xl bg-secondaryText text-linecolor normal-case w-44 font-montserrat absolute z-30  rounded-[10px]">
              <div className="mt-3 flex w-full justify-end">
                <div className="fa-sharp fa-solid fa-times text-[24px] mr-4"></div>
              </div>

              <div
                className={`flex flex-col ml-5 gap-y-9 md:flex-row text-xl md:text-xl gap-x-3 md:gap-x-28 my-4 md:my-2 ${
                  isMenuOpen ? 'flex' : 'hidden'
                }`}
              >
                <div className="flex flex-row gap-x-3">
                  <div>
                    <div className="fa-sharp fa-solid fa-home"></div>
                  </div>
                  <div className="md:w-24">
                    <button onClick={toggleMenu}>
                      <Link
                        className="hover:font-bold hover:underline underline-offset-3"
                        href={'/'}
                      >
                        Home
                      </Link>
                    </button>
                  </div>
                </div>

                <div className="flex flex-row gap-x-3">
                  <div>
                    <div className="fa-sharp fa-solid fa-user"></div>
                  </div>
                  <div className="md:w-24">
                    <button onClick={toggleMenu}>
                      <Link
                        className="hover:font-bold hover:underline underline-offset-3"
                        href={'/about'}
                      >
                        About me
                      </Link>
                    </button>
                  </div>
                </div>

                <div className="flex flex-row gap-x-3">
                  <div>
                    <div className="fa-sharp fa-solid fa-bars-progress"></div>
                  </div>
                  <div className="md:w-24">
                    <button onClick={toggleMenu}>
                      <Link
                        className="hover:font-bold hover:underline underline-offset-3"
                        href={'/projectsDisplay'}
                      >
                        Projects
                      </Link>
                    </button>
                  </div>
                </div>

                <div className="flex flex-row gap-x-3">
                  <div>
                    <div className="fa-sharp fa-solid fa-phone"></div>
                  </div>
                  <div className="md:w-24">
                    <button
                      className="hover:font-bold hover:underline underline-offset-3"
                      onClick={() => {
                        window.scrollTo({
                          top: Math.max(
                            document.body.scrollHeight,
                            document.documentElement.scrollHeight
                          ),
                          behavior: 'smooth',
                        });
                      }}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-3 ml-36">
              <div className="fa-sharp fa-solid fa-bars text-[24px] text-linecolor"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
