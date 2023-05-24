import Link from "next/link";

const PrimaryNavbar = () => {
  return (
    <div className="flex flex-row gap-x-96 m-6">
      {/* <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <Link href={"/about"}>About Me</Link>
              </li>
              <li>
                <a href={"/contact"}>Contact</a>
              </li>
              <li>
                <a href={"/projectsDisplay"}>Projects</a>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" href={"/"}>
            Ahmed Tahir Shekhani
          </Link>
        </div>
        <div className="text-black hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/about"}>About Me</Link>
            </li>
          </ul>
        </div>
        <div className="text-black hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/about"}>About Me</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <a className="btn" href={"/contact"}>
            Contact Now!
          </a>

        </div>
        <div className="navbar-end  hidden lg:flex">
          <a className="btn" href={"/projectsDisplay"}>
            projects
          </a>
          
        </div>
      </div> */}
      <div className="w-44">
        <Link className="normal-case  text-3xl font-roboto font-light" href={"/"}>
            Ahmed Tahir Shekhani
        </Link>
      </div>
      <div className="flex flex-row  gap-x-28 my-2 ">
        <Link className="normal-case w-20 text-xl font-roboto font-normal hover:font-bold hover:underline underline-offset-3" href={"/"}>
              Home
        </Link>
        <Link className="normal-case w-28 text-xl font-roboto font-normal  hover:font-bold hover:underline underline-offset-3" href={"/"}>
              About me
        </Link> 
        <Link className="normal-case w-24 text-xl font-roboto font-normal hover:font-bold hover:underline underline-offset-3" href={"/projectsDisplay"}>
              Projects
        </Link>
        <Link className="normal-case w-24 text-xl font-roboto font-normal hover:font-bold hover:underline underline-offset-3" href={"/contact"}>
              Contact
        </Link>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
