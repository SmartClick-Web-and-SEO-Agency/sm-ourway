import { useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ArticlesContext } from '../store/articles';

import Header from '../components/Header';

import logoutIcon from '../assets/logout-icon.svg';
import Article from '../components/Article';

const Root = () => {
  const { all } = useContext(ArticlesContext);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <Header handleSearch={setSearchTerm} />

      <main>
        <div className="container">
          {!searchTerm && <Outlet />}
          {searchTerm && <p>Searched for {searchTerm}</p>}
          {searchTerm &&
            all &&
            all
              .filter((item) =>
                item.title.rendered
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((item) => (
                <Article
                  item={item}
                  key={item.id}
                  handleClick={() => setSearchTerm('')}
                />
              ))}
        </div>
      </main>

      <button className="logout-icon" onClick={handleLogout}>
        <img src={logoutIcon} alt="Logout Icon" />
      </button>
    </>
  );
};
export default Root;
