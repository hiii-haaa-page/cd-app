import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(push('/'))}>home</button>
    </>
  );
};

export default Home;
