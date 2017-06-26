import assert from 'assert';
import {resetState, getState} from './state-controller';
import {answerHandler} from './controller';

describe(`answerHandler`, () => {
  it(`should decrease state.questions by 1`, () => {
    resetState();
    let currentState = getState();
    const previousQuestions = currentState.questions;
    answerHandler(true);
    assert.equal(currentState.questions, previousQuestions - 1);
  });

  describe(`correct answer`, () => {
    it(`should increase state.rightAnswers by 1`, () => {
      resetState();
      let currentState = getState();
      const previousRightAnswers = currentState.rightAnswers;
      answerHandler(true);
      assert.equal(currentState.rightAnswers, previousRightAnswers + 1);
    });
    it(`shouldn't change state.lives`, () => {
      resetState();
      let currentState = getState();
      const previousLivesNumber = currentState.lives;
      answerHandler(true);
      assert.equal(currentState.lives, previousLivesNumber);
    });

  });

  describe(`wrong answer`, () => {
    it(`shouldn't change state.rightAnswers`, () => {
      resetState();
      let currentState = getState();
      const previousRightAnswers = currentState.rightAnswers;
      answerHandler(false);
      assert.equal(currentState.rightAnswers, previousRightAnswers);
    });

    it(`should decrease state.lives by 1`, () => {
      resetState();
      let currentState = getState();
      const previousLivesNumber = currentState.lives;
      answerHandler(false);
      assert.equal(currentState.lives, previousLivesNumber - 1);
    });

    it(`if state.lives is 0 should return 'gameLoss'`, () => {
      resetState();
      let currentState = getState();
      currentState.lives = 1;
      assert.equal(answerHandler(false), `gameLoss`);
    });
  });
});
