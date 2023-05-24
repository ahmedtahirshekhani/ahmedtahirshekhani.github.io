import Link from "next/link";

const PrimaryNavbar = () => {
  return (
    <div className="flex flex-row gap-x-96 m-6 absolute z-20">
      <div className="w-44">
        <Link className="normal-case  text-3xl font-roboto font-light" href={"/"}>
            Ahmed Tahir Shekhani
        </Link>
      </div>
      <div className="flex flex-row  gap-x-28 my-2">
        <Link className="normal-case w-20 text-xl font-roboto font-normal hover:font-bold hover:underline underline-offset-3" href={"/"}>
              Home
        </Link>
        <Link className="normal-case w-28 text-xl font-roboto font-normal  hover:font-bold hover:underline underline-offset-3" href={"/about"}>
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
