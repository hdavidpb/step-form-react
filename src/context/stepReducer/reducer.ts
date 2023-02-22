import { steps } from "../../utils/steps";
import { Action, IInitialState, Step } from "../interfaces";

import {
  CHANGE_PRODUCTS_ORDER,
  GENERATE_WAPP_TEXT,
  GET_PRODUCTS_DATA,
  INCREASE_BY,
} from "./types";

import {
  CHANGE_STEP_ONE_FORM_VALUE,
  GO_BACK,
  IS_INVALID,
  IS_VALID,
  NEXT_STEP,
  SELECT_PRODUCT,
} from "./types";

export const initialState: IInitialState = {
  steps,
  index: 0,
  stepOneformValues: {
    payMethod: "",
    address: "",
    description: "",
  },

  stepOneProducts: {
    products: [],
  },

  addOnsSelected: [],
  productSelected: [],
  wappText: "",
};

export const stepReducer = (
  state: IInitialState = initialState,
  action: Action
): IInitialState => {
  switch (action.type) {
    case GET_PRODUCTS_DATA:
      return {
        ...state,
        stepOneProducts: { ...state.stepOneProducts, products: action.payload },
      };

    case NEXT_STEP:
      return {
        ...state,
        index:
          state.index < state.steps.length - 1
            ? state.index + action.payload
            : state.steps.length - 1,
      };
    case GO_BACK:
      return {
        ...state,

        index: state.index > 0 ? state.index + action.payload : 0,
      };
    case CHANGE_STEP_ONE_FORM_VALUE:
      return {
        ...state,
        stepOneformValues: {
          ...state.stepOneformValues,
          [action.payload.name]: action.payload.value,
        },
      };

    case IS_VALID:
      const newSteps = state.steps.map((step, idx) => {
        if (idx === action.payload) return { ...step, isCompleted: true };
        return step;
      });

      return { ...state, steps: newSteps };

    case IS_INVALID:
      const stepsWithFalse = state.steps.map((step, idx) => {
        if (idx === action.payload) return { ...step, isCompleted: false };
        return step;
      });

      return { ...state, steps: stepsWithFalse };

    case SELECT_PRODUCT:
      const newProducts = state.stepOneProducts.products.map((product) =>
        product.nombre === action.payload
          ? { ...product, isSelected: true }
          : { ...product }
      );
      const selectedPlans = newProducts.filter((product) => product.isSelected);

      return {
        ...state,
        stepOneProducts: {
          ...state.stepOneProducts,
          products: newProducts,
        },
        productSelected: selectedPlans,
      };

    case INCREASE_BY:
      const newProductsby = state.stepOneProducts.products.map((product) => {
        if (product.nombre === action.payload.productName) {
          return {
            ...product,
            count: product.count + action.payload.increaseNumber,
          };
        }
        return product;
      });

      return {
        ...state,
        stepOneProducts: {
          ...state.stepOneProducts,
          products: newProductsby,
        },
      };
    case CHANGE_PRODUCTS_ORDER:
      return { ...state, index: action.payload };
    case GENERATE_WAPP_TEXT:
      return {
        ...state,
        wappText: action.payload,
      };

    default:
      return { ...state };
  }
};
