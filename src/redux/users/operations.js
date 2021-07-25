import { signInAction } from './actions';
import { push } from 'connected-react-router';

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/deatiger';

      const responce = await fetch(url)
        .then(res => res.json())
        .catch(() => null);

      const username = responce.login;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: '0002',
          username: username,
        })
      );

      dispatch(push('/'));
    }
  };
};
