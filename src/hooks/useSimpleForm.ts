import { useEffect, useState, useContext, useRef, useCallback } from "react";
import React from "react";
import { stepsContext } from "../context/StepsProvider";
import {
  changeStepOneValue,
  setValidStep,
} from "../context/stepReducer/actions";

const useSimpleForm = <T>(initialState: T) => {
  const { dispatch, state } = useContext(stepsContext);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(changeStepOneValue(e.target.name, e.target.value));
  };

  const isValidForm = () => {
    let isValidCount = 0;

    for (let value of Object.values(state.stepOneformValues)) {
      if (value === "") {
        isValidCount = isValidCount += 1;
      } else {
        isValidCount = isValidCount -= 1;
      }
    }

    const isValid =
      isValidCount === -Object.values(state.stepOneformValues).length;

    dispatch(setValidStep(isValid, 1));
  };

  useEffect(() => {
    isValidForm();
  }, [state.stepOneformValues]);

  return { ...state.stepOneformValues, onChange };
};

export default useSimpleForm;
