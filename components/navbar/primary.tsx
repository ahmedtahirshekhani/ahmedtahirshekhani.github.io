import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const PrimaryNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row gap-x-16 md:gap-x-96 md:m-6 absolute z-20 font-montserrat">
      <div className="w-28 md:w-44 m-3">
        <Link className="normal-case text-base md:text-3xl font-montserrat font-light" href={'/'}>
          Ahmed Tahir Shekhani
        </Link>
      </div>
      <div className="hidden md:flex flex-row text-xs md:text-xl gap-x-3 md:gap-x-28 my-4 md:my-2">
        <div className="md:w-24">
          <Link className="normal-case w-20 font-montserrat font-normal hover:font-bold hover:underline underline-offset-3" href={'/'}>
            Home
          </Link>
        </div>
        <div className="md:w-24">
          <Link className="font-normal hover:font-bold hover:underline underline-offset-3" href={'/about'}>
            About me
          </Link>
        </div>
        <div className="md:w-24">
          <Link className="normal-case w-24 font-montserrat font-normal hover:font-bold hover:underline underline-offset-3" href={'/projectsDisplay'}>
            Projects
          </Link>
        </div>
        <div className="md:w-24">
          <button
            className="m-0 p-0 normal-case font-montserrat font-normal hover:font-bold hover:underline underline-offset-3"
            onClick={() => {
              window.scrollTo({
                top: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                behavior: 'smooth',
              });
            }}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <div onClick={toggleMenu}>
          {isMenuOpen ? (

            <div className='flex flex-col mt-5 drop-shadow-2xl bg-secondaryText text-linecolor normal-case w-44 font-montserrat absolute z-30  rounded-[10px]'>
              <div className='mt-3 flex w-full justify-end'>
                <div className='fa-sharp fa-solid fa-times text-[24px] mr-4'></div>
              </div>

              <div className={`flex flex-col ml-5 gap-y-9 md:flex-row text-xl md:text-xl gap-x-3 md:gap-x-28 my-4 md:my-2 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                <div className='flex flex-row gap-x-3'>
                  <div>
                    <div className='fa-sharp fa-solid fa-home'></div>
                  </div>
                  <div className="md:w-24">
                    <button onClick={toggleMenu}>
                      <Link className="hover:font-bold hover:underline underline-offset-3" href={'/'}>
                        Home
                      </Link>
                    </button>
                  </div>

                </div>

                <div className='flex flex-row gap-x-3'>
                  <div>
                    <div className='fa-sharp fa-solid fa-user'></div>
                  </div>
                  <div className="md:w-24">
                    <button onClick={toggleMenu}>
                      <Link className="hover:font-bold hover:underline underline-offset-3" href={'/about'}>
                        About me
                      </Link>
                    </button>
                  </div>
                </div>

                <div className='flex flex-row gap-x-3'>
                  <div>
                    <div className='fa-sharp fa-solid fa-bars-progress'></div>
                  </div>
                  <div className="md:w-24">
                    <button onClick={toggleMenu}>
                      <Link className="hover:font-bold hover:underline underline-offset-3" href={'/projectsDisplay'}>
                        Projects
                      </Link>
                    </button>
                  </div>
                </div>

                <div className='flex flex-row gap-x-3'>
                  <div>
                    <div className='fa-sharp fa-solid fa-phone'></div>
                  </div>
                  <div className="md:w-24">
                    <button
                      className="hover:font-bold hover:underline underline-offset-3"
                      onClick={() => {
                        window.scrollTo({
                          top: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
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
            <div className='mt-3 ml-36'>
              <div className='fa-sharp fa-solid fa-bars text-[24px] text-linecolor'></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
