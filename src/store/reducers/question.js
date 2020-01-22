const defaultState = { fetching: false, fetched: false, payload: {} };

const question = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS_STARTED':
      return {
        ...state,
        fetching: true,
      };
    case 'FETCH_QUESTIONS_LOADED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        payload: action.payload,
      };
    case 'FETCH_QUESTIONS_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default question;
