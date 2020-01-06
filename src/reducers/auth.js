import { 
  AUTH_IN_PROGRESS,
  AUTH_SUCCESS,
} from "actions/types";

const initialState = {
  profile: {name: 'Alex'},
  token: null,
  status: 'guest', // guest // in_progress // auth
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  let newState = null;

  switch(type) {
    case AUTH_IN_PROGRESS:
      newState = JSON.parse(JSON.stringify(state));
      newState.status = 'in_progress';
      return newState;

    case AUTH_SUCCESS:
      newState = JSON.parse(JSON.stringify(state));
      newState.status = 'auth';
      newState.profile = action.payload.profile;
      return newState;

    default:
      return state;
  }
}

export default reducer;