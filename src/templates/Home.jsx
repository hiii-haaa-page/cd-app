import { useSelector } from 'react-redux';
import { getUserId, getUserName } from '../redux/users/selectors';

const Home = () => {
  const selector = useSelector(state => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);

  return (
    <>
      <h2>ホーム</h2>
      <p>{uid}</p>
      <p>{username}</p>
    </>
  );
};

export default Home;
