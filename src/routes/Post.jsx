import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArticlesContext } from '../store/articles';

import TableOfContents from '../components/TableOfContents';

import classes from '../css/Post.module.css';

const Post = () => {
  const [post, setPost] = useState();

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

  const { [cat]: data } = useContext(ArticlesContext);

  useEffect(() => {
    if (data && id) {
      console.log(data);
      console.log(id);

      let p = data.find((item) => item.id === +id);
      setPost(p);
    }
  }, [data, id]);

  return (
    <div className={classes.postContainer}>
      {post ? (
        <div
          className={classes.singlePost}
          dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
        ></div>
      ) : (
        <p>Loading post...</p>
      )}

      <TableOfContents />
    </div>
  );
};

export default Post;
