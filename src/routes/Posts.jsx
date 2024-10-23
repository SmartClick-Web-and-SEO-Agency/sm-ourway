import { useContext } from 'react';
import { ArticlesContext } from '../store/articles';

import Article from '../components/Article';

const Posts = ({ type }) => {
  const { [type]: data } = useContext(ArticlesContext);

  return (
    <>
      {data.map((item) => (
        <Article item={item} key={item.id} />
      ))}
    </>
  );
};
export default Posts;
