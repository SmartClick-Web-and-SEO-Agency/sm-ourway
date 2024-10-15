import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <>
      <Header title="SmartClick - OurWay" />

      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Root;
