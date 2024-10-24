import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import logoutIcon from '../assets/logout-icon.svg';

const Root = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <button className="logout-icon" onClick={handleLogout}>
        <img src={logoutIcon} alt="Logout Icon" />
      </button>
    </>
  );
};
export default Root;
