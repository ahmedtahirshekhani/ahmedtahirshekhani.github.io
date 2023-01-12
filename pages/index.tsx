import type { NextPage } from "next";
import PrimaryNavbar from "../components/navbars/primary";
import HomePage from "./home";

const Home: NextPage = () => {
  return (
	<div>
      <PrimaryNavbar />
    <div className="container mx-auto">
	  <HomePage />
    </div>
	</div>
  );
};

export default Home;
