import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>こんに日は</h2>
      <button onClick={() => dispatch(push('/'))}>home</button>
    </>
  );
};

export default Login;
