import { useEffect, useState } from 'react';
import { fetchData, fetchToken } from '../utils/http';

import Article from '../components/Article';

const Posts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = fetchToken();

    const resolveData = async () => {
      setData(await fetchData(token, type));
    };
    resolveData();
  }, [type]);

  return (
    <>
      {data.length > 0
        ? data.map((item) => <Article item={item} key={item.id} />)
        : 'No posts here for you. :)'}
    </>
  );
};
export default Posts;
