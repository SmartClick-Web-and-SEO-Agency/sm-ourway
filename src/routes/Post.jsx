import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPost } from '../utils/http';

import classes from '../css/Post.module.css';

const Post = () => {
  const location = useLocation();
  const match = location.pathname.match(
    /\/([a-zA-Z-]+)\/[a-zA-Z0-9-]+-(\d{3,4})$/
  );
  const categoryMatch = match ? match[1] : null;
  const id = match ? match[2] : null;

  const categoryMap = {
    'how-to-processes': 'howto',
    'organisation-and-management-guidelines': 'organisation',
  };

  const cat = categoryMap[categoryMatch] || categoryMatch;

  const { isPending, isError, data } = useQuery({
    queryKey: ['articles', id],
    queryFn: () => fetchPost(cat, id),
  });

  if (isError) return <p style={{ textAlign: 'center' }}>An error occured.</p>;
  if (isPending)
    return <p style={{ textAlign: 'center' }}>Loading... Be patient :)</p>;

  return (
    <div className={classes.singlePost}>
      <div
        dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}
      ></div>
    </div>
  );
};

export default Post;
