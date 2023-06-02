import Link from 'next/link';

const PrimaryNavbar = () => {
  return (
    <div className="flex flex-row gap-x-10 md:gap-x-96 m-3 md:m-6 absolute z-20 font-montserrat">
      <div className="w-28 md:w-44">
        <Link
          className="normal-case text-base md:text-3xl font-montserrat font-light"
          href={'/'}
        >
          Ahmed Tahir Shekhani
        </Link>
      </div>
      <div className="flex flex-row text-xs md:ml-24 md:text-xl gap-x-3 md:gap-x-28 my-4 md:my-2">
        <div className='md:w-24'>
          <button>
            <Link
              className="normal-case w-20  font-montserrat font-normal hover:font-bold hover:underline underline-offset-3"
              href={'/'}
            >
              Home
            </Link>
          </button>
        </div>
        <div className=' md:w-24'>
          <button>
            <Link
              className="normal-case w-28  font-montserrat font-normal  hover:font-bold hover:underline underline-offset-3"
              href={'/about'}
            >
              About me
            </Link>
          </button>
        </div>
        <div className=' md:w-24'>
          <button>
            <Link
              className="normal-case w-24  font-montserrat font-normal hover:font-bold hover:underline underline-offset-3"
              href={'/projectsDisplay'}
            >
              Projects
            </Link>
          </button>
        </div>
        <div className='md:w-24'>
          <button
            className="m-0 p-0 normal-case   font-montserrat font-normal hover:font-bold hover:underline underline-offset-3"
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
  );
};

export default PrimaryNavbar;
