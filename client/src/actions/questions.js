import { UPDATE_QUESTIONS } from "./actionTypes";
import { APIUrls } from "../helpers/urls";

export function fetchQuestions() {
  return (dispatch) => {
    const url = APIUrls.fetchQuestions();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updateQuestions(data.data.questions));
      });
  };
}

export function updateQuestions(questions) {
  return {
    type: UPDATE_QUESTIONS,
    questions,
  };
}
