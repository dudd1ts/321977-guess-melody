import assert from 'assert';
import {resetState, getState, changeState} from './state-controller';
import {answerHandler} from './controller';

describe(`answerHandler`, () => {
  it(`should decrease state.questions by 1`, () => {
    resetState();
    const initialState = getState();
    const initialQuestions = initialState.questions;
    answerHandler(true);
    const newState = getState();
    const newQuestions = newState.questions;
    assert.equal(newQuestions, initialQuestions - 1);
  });

  describe(`correct answer`, () => {
    it(`should increase state.rightAnswers by 1`, () => {
      resetState();
      const initialState = getState();
      const initialRightAnswers = initialState.rightAnswers;
      answerHandler(true);
      const newState = getState();
      const newRightAnswers = newState.rightAnswers;
      assert.equal(newRightAnswers, initialRightAnswers + 1);
    });

    it(`shouldn't change state.lives`, () => {
      resetState();
      const initialState = getState();
      const initialLives = initialState.lives;
      answerHandler(true);
      const newState = getState();
      const newLives = newState.lives;
      assert.equal(newLives, initialLives);
    });

  });

  describe(`wrong answer`, () => {
    it(`shouldn't change state.rightAnswers`, () => {
      resetState();
      const initialState = getState();
      const initialRightAnswers = initialState.rightAnswers;
      answerHandler(false);
      const newState = getState();
      const newRightAnswers = newState.rightAnswers;
      assert.equal(newRightAnswers, initialRightAnswers);
    });

    it(`should decrease state.lives by 1`, () => {
      resetState();
      const initialState = getState();
      const initialLives = initialState.lives;
      answerHandler(false);
      const newState = getState();
      const newLives = newState.lives;
      assert.equal(newLives, initialLives - 1);
    });

    it(`if state.lives is 0 should return 'gameLoss'`, () => {
      resetState();
      const initialState = getState();
      initialState.lives = 1;
      changeState(initialState);
      const newScreenType = answerHandler(false);
      assert.equal(newScreenType, `gameLoss`);
    });
  });
});
