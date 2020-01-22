const defaultState = {
  fetching: false,
  fetched: false,
  currentIndex: 0,
  questions: {},
  currentQuestion: {},
};

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
        questions: action.questions,
        currentQuestion: action.questions.results[0],
      };
    case 'FETCH_QUESTIONS_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error,
      };
    case 'QUESTIONS_CHANGE':
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        currentQuestion: action.questions.results[state.currentIndex + 1],
      };
    default:
      return state;
  }
};

export default question;
