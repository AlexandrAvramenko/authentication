import { 
  AUTH_IN_PROGRESS,
  AUTH_SUCCESS,
} from "actions/types";

const login = (login, password) => (dispatch) => {
  dispatch({
    type: AUTH_IN_PROGRESS,
  });

  setTimeout(() => {
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        profile: {name: 'Ivan'}
      },
    });
  }, 1500);
}

export { login };