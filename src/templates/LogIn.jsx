import { useDispatch } from 'react-redux';
import { signIn } from '../redux/users/operations';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>ログイン</h2>
      <button
        onClick={() => {
          dispatch(signIn());
        }}
      >
        ログインする
      </button>
    </>
  );
};

export default Login;
