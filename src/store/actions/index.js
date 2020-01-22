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

export const QuestionChange = () => ({
  type: 'QUESTIONS_CHANGE',
});

export const generateQuestions = difficulty => dispatch => {
  dispatch(fetchQuestionsStarted());
  http
    .get(`/api.php?amount=10&category=9&difficulty=${difficulty}&type=multiple`)
    .then(response => {
      if (response.data.response_code === 0) {
        dispatch(fetchQuestionsLoaded(response.data));
      } else {
        dispatch(fetchQuestionsError(response.data.Error));
      }
    })
    .catch(error => {
      dispatch(fetchQuestionsError(error.toString()));
    });
};
