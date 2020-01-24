import {
  FETCH_QUESTIONS_STARTED,
  FETCH_QUESTIONS_LOADED,
  FETCH_QUESTIONS_ERROR,
  QUESTION_ANSWERED_CORRECTLY,
  QUESTIONS_CHANGED,
  GAME_OVER,
  JOKER_USED,
} from '../constansts/ActionTypes';

const defaultState = {
  fetching: false,
  fetched: false,
  currentIndex: 0,
  questions: {},
  currentQuestion: {},
  points: 0,
  lastEarnedPoint: 0,
  jokerCount: 1,
  jokerUsed: false,
};

const question = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_STARTED:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_QUESTIONS_LOADED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        questions: action.questions,
        currentQuestion: action.questions.results[0],
        questionCount: action.questions.results.length,
      };
    case FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error,
      };
    case QUESTION_ANSWERED_CORRECTLY:
      return {
        ...state,
        points: state.points + action.point,
        lastEarnedPoint: action.point,
      };
    case QUESTIONS_CHANGED:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        currentQuestion: state.questions.results[state.currentIndex + 1],
        jokerUsed: false,
      };
    case JOKER_USED:
      return {
        ...state,
        jokerCount: state.jokerCount - 1,
        jokerUsed: true,
      };
    case GAME_OVER:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
};

export default question;
