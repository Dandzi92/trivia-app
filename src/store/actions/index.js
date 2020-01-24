const axios = require('axios').default;

const http = axios.create({
  baseURL: 'https://opentdb.com',
});

export const fetchQuestionsStarted = () => ({
  type: 'FETCH_QUESTIONS_STARTED',
});

export const fetchQuestionsLoaded = questions => ({
  type: 'FETCH_QUESTIONS_LOADED',
  questions,
});

export const fetchQuestionsError = error => ({
  type: 'FETCH_QUESTIONS_ERROR',
  error,
});

export const generateQuestions = (category, difficulty) => dispatch => {
  dispatch(fetchQuestionsStarted());
  let URL = '/api.php?amount=10&type=multiple';
  URL = category !== 'any' ? `${URL}&category=${category}` : URL;
  URL = difficulty !== 'any' ? `${URL}&difficulty=${difficulty}` : URL;
  http
    .get(URL)
    .then(response => {
      if (response.data.response_code === 0) {
        dispatch(fetchQuestionsLoaded(response.data));
      } else {
        dispatch(fetchQuestionsError('Question not found!'));
      }
    })
    .catch(error => {
      dispatch(fetchQuestionsError(error.toString()));
    });
};

export const questionAnsweredCorrectly = point => ({
  type: 'QUESTION_ANSWERED_CORRECTLY',
  point,
});

export const questionChanged = () => ({
  type: 'QUESTIONS_CHANGED',
});

export const gameOver = () => ({
  type: 'GAME_OVER',
});
