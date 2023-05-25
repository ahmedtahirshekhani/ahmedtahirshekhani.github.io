import type { NextPage } from 'next';
import PrimaryNavbar from '../components/navbar/primary';
import HomePage from './home';
import PrimaryFooter from '../components/footer/primaryFooter';

const Home: NextPage = () => {
  return (
    <div>
      <PrimaryNavbar />
      <div className="">
        <HomePage />
      </div>
      <PrimaryFooter/>
    </div>
  );
};

export default Home;
