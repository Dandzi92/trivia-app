const defaultState = {
  fetching: false,
  fetched: false,
  currentIndex: 0,
  questions: {},
  currentQuestion: {},
  points: 0,
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
        questionCount: action.questions.results.length,
      };
    case 'FETCH_QUESTIONS_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error,
      };
    case 'QUESTION_ANSWERED_CORRECTLY':
      return {
        ...state,
        points: state.points + 100,
      };
    case 'QUESTIONS_CHANGED':
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        currentQuestion: state.questions.results[state.currentIndex + 1],
      };
    case 'GAME_OVER':
      return {
        ...defaultState,
      };
    default:
      return state;
  }
};

export default question;
