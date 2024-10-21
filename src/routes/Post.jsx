import { useEffect, useState } from 'react';
import { fetchPost } from '../utils/http';

const Post = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const resolveData = async () => {
      setData(await fetchPost('howto', id));
    };
    resolveData();
  }, [id]);

  return (
    <div
      style={{ maxWidth: '750px' }}
      dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}
    ></div>
  );
};
export default Post;
