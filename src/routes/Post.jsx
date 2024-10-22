import { useEffect, useState } from 'react';
import { fetchPost } from '../utils/http';
import { useLocation } from 'react-router-dom';

const Post = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const match = location.pathname.match(
      /\/([a-zA-Z-]+)\/[a-zA-Z0-9-]+-(\d{3,4})$/
    );
    const categoryMatch = match ? match[1] : null;
    const id = match ? match[2] : null;

    const resolveData = async () => {
      if (id) {
        setData(await fetchPost(categoryMatch, id));
      }
    };
    resolveData();
  }, [location]);

  return (
    <div style={{ maxWidth: '750px' }}>
      <div
        dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}
      ></div>
    </div>
  );
};

export default Post;
