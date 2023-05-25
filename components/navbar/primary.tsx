import Link from 'next/link';

const PrimaryNavbar = () => {
  return (
    <div className="flex flex-row gap-x-96 m-6 absolute z-20">
      <div className="w-44">
        <Link
          className="normal-case  text-3xl font-roboto font-light"
          href={'/'}
        >
          Ahmed Tahir Shekhani
        </Link>
      </div>
      <div className="flex flex-row  gap-x-28 my-2">
        <div className='w-24'>
          <button>
            <Link
              className="normal-case w-20 text-xl font-roboto font-normal hover:font-bold hover:underline underline-offset-3"
              href={'/'}
            >
              Home
            </Link>
          </button>
        </div>
        <div className='w-24'>
          <button>
            <Link
              className="normal-case w-28 text-xl font-roboto font-normal  hover:font-bold hover:underline underline-offset-3"
              href={'/about'}
            >
              About me
            </Link>
          </button>
        </div>
        <div className='w-24'>
          <button>
            <Link
              className="normal-case w-24 text-xl font-roboto font-normal hover:font-bold hover:underline underline-offset-3"
              href={'/projectsDisplay'}
            >
              Projects
            </Link>
          </button>
        </div>
        <div className='w-24'>
          <button
            className="m-0 p-0 normal-case w-24 text-xl font-roboto font-normal hover:font-bold hover:underline underline-offset-3"
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
