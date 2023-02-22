import { ContentData } from "../../interfaces/interfaces";
import { createProductsAdapter } from "../../adapters/adapters";
import {
  CHANGE_PRODUCTS_ORDER,
  CHANGE_STEP_ONE_FORM_VALUE,
  GENERATE_WAPP_TEXT,
  GET_PRODUCTS_DATA,
  GO_BACK,
  INCREASE_BY,
  IS_INVALID,
  IS_VALID,
  NEXT_STEP,
  SELECT_PRODUCT,
} from "./types";
import { Product } from "../interfaces";

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
  type: IS_INVALID,
  payload: index,
});

export const setValidStep = (isValid: boolean, index: number) => {
  if (isValid) return isValidStep(index);
  return isInValid(index);
};

export const selectOrUnselectProduct = (productTitle: string) => ({
  type: SELECT_PRODUCT,
  payload: productTitle,
});

export const increaseBy = (productName: string, increaseNumber: number) => {
  return {
    type: INCREASE_BY,
    payload: {
      increaseNumber,
      productName,
    },
  };
};

export const editProductOrder = () => ({
  type: CHANGE_PRODUCTS_ORDER,
  payload: 0,
});

export const generateWappText = (text: string) => ({
  type: GENERATE_WAPP_TEXT,
  payload: text,
});

export const getProductsData = (data: Product[]) => ({
  type: GET_PRODUCTS_DATA,
  payload: data,
});
