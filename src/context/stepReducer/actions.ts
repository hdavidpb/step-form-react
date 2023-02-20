import { PlanType } from "../interfaces";
import {
  CHANGE_PLAN_TYPE,
  CHANGE_STEP_ONE_FORM_VALUE,
  CHANGE_STEP_TWO_PLAN_TYPE,
  GO_BACK,
  IS_INVALIDVALID,
  IS_VALID,
  NEXT_STEP,
  SELECT_OR_UNSELECT_ADD_ON,
  SELECT_OR_UNSELECT_PLAN,
} from "./types";

export const nextStep = () => ({ type: NEXT_STEP, payload: 1 });
export const goBack = () => ({ type: GO_BACK, payload: -1 });

export const changeStepOneValue = (name: string, value: string) => ({
  type: CHANGE_STEP_ONE_FORM_VALUE,
  payload: {
    name,
    value,
  },
});

export const isValidStep = (index: number) => ({
  type: IS_VALID,
  payload: index,
});

export const isInValid = (index: number) => ({
  type: IS_INVALIDVALID,
  payload: index,
});

export const setValidStep = (isValid: boolean, index: number) => {
  if (isValid) return isValidStep(index);
  return isInValid(index);
};

export const changeStepTwoPlanType = (planType: PlanType) => ({
  type: CHANGE_STEP_TWO_PLAN_TYPE,
  payload: planType,
});

export const selectOrUnselectPlan = (planTitle: string) => ({
  type: SELECT_OR_UNSELECT_PLAN,
  payload: planTitle,
});

export const selectOrUnselectAddOn = (addOnTitle: string) => ({
  type: SELECT_OR_UNSELECT_ADD_ON,
  payload: addOnTitle,
});

export const changePlanType = (index: number) => ({
  type: CHANGE_PLAN_TYPE,
  payload: 1,
});
