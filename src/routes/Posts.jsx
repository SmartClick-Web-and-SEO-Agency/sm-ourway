import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/http';

import Article from '../components/Article';

const Posts = ({ type }) => {
  const { isPending, isError, data } = useQuery({
    queryKey: ['articles', type],
    queryFn: () => fetchData(type),
  });

  if (isError) return <p style={{ textAlign: 'center' }}>An error occured.</p>;
  if (isPending)
    return <p style={{ textAlign: 'center' }}>Loading... Be patient :)</p>;

  return (
    <>
      {!isPending &&
        !isError &&
        data
          .filter(
            (item) =>
              !item.content.rendered.includes(
                'Sorry, but you do not have permission to view this content.'
              )
          )
          .map((item) => <Article item={item} key={item.id} />)}
    </>
  );
};
export default Posts;
