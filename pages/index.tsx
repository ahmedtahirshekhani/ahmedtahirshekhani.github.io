import type { NextPage } from 'next';
import PrimaryNavbar from '../components/navbar/primary';
import HomePage from './home';
import PrimaryFooter from '../components/footer/primaryFooter';

const Home: NextPage = () => {
  return (
    <div>
      <PrimaryNavbar />
        <HomePage />
      <PrimaryFooter></PrimaryFooter>
    </div>
  );
};

export default Home;
