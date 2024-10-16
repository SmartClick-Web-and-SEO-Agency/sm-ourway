import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <>
      <Header title="SmartClick - OurWay" />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default Root;
