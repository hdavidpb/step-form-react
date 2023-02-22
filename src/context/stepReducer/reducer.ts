import { steps } from "../../utils/steps";
import { Action, Category, IInitialState, Product } from "../interfaces";

import {
  FECTH_LOADING,
  CHANGE_PRODUCTS_ORDER,
  GENERATE_WAPP_TEXT,
  GET_PRODUCTS_DATA,
  INCREASE_BY,
  FECTH_SUCCESS,
  GO_TO_STEP,
  UNSELECT_PRODUCT,
  SELECT_CATEGORY,
  CHANGE_STEP_ONE_FORM_VALUE,
  GO_BACK,
  IS_INVALID,
  IS_VALID,
  NEXT_STEP,
  SELECT_PRODUCT,
  FILTER_BY_CATEGORY_TYPE,
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
    filteredProducts: [],
    categories: [],
  },
  loadingProducts: false,
  productSelected: [],
  wappText: "",
};

export const stepReducer = (
  state: IInitialState = initialState,
  action: Action
): IInitialState => {
  switch (action.type) {
    case GET_PRODUCTS_DATA:
      const categories: Category[] = action.payload.map((product: Product) => ({
        type: product.tipo,
        isSelected: false,
      }));

      let hash: any = {};
      const filterCategories = categories.filter((category) =>
        hash[category.type] ? false : (hash[category.type] = true)
      );

      return {
        ...state,
        stepOneProducts: {
          ...state.stepOneProducts,
          products: action.payload,
          filteredProducts: action.payload,
          categories: filterCategories,
        },
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

    case GO_TO_STEP:
      return { ...state, index: action.payload };

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
      const newProducts = state.stepOneProducts.filteredProducts.map(
        (product) =>
          product.nombre === action.payload
            ? { ...product, isSelected: true }
            : { ...product }
      );
      const newSelectedProducts = state.stepOneProducts.products.map(
        (product) =>
          product.nombre === action.payload
            ? { ...product, isSelected: true }
            : { ...product }
      );
      const selectedProducts = newSelectedProducts.filter(
        (product) => product.isSelected
      );

      return {
        ...state,

        stepOneProducts: {
          ...state.stepOneProducts,
          products: newSelectedProducts,
          filteredProducts: newProducts,
        },
        productSelected: selectedProducts,
      };

    case UNSELECT_PRODUCT:
      const prods = state.stepOneProducts.filteredProducts.map((product) =>
        product.nombre === action.payload
          ? { ...product, isSelected: false }
          : { ...product }
      );
      const newProdSel = state.stepOneProducts.products.map((product) =>
        product.nombre === action.payload
          ? { ...product, isSelected: false }
          : { ...product }
      );

      const selected = newProdSel.filter((product) => product.isSelected);
      return {
        ...state,
        stepOneProducts: {
          ...state.stepOneProducts,
          products: newProdSel,
          filteredProducts: prods,
        },
        productSelected: selected,
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
      const filterProd = state.stepOneProducts.filteredProducts.map(
        (product) => {
          if (product.nombre === action.payload.productName) {
            return {
              ...product,
              count: product.count + action.payload.increaseNumber,
            };
          }
          return product;
        }
      );

      return {
        ...state,
        stepOneProducts: {
          ...state.stepOneProducts,
          products: newProductsby,
          filteredProducts: filterProd,
        },
      };

    case CHANGE_PRODUCTS_ORDER:
      return { ...state, index: action.payload };
    case GENERATE_WAPP_TEXT:
      return {
        ...state,
        wappText: action.payload,
      };
    case FECTH_LOADING:
      return { ...state, loadingProducts: action.payload };
    case FECTH_SUCCESS:
      return { ...state, loadingProducts: action.payload };

    case SELECT_CATEGORY:
      const newCategories = state.stepOneProducts.categories.map((category) =>
        category.type === action.payload
          ? { ...category, isSelected: !category.isSelected }
          : { ...category, isSelected: false }
      );
      return {
        ...state,
        stepOneProducts: {
          ...state.stepOneProducts,
          categories: newCategories,
        },
      };
    case FILTER_BY_CATEGORY_TYPE:
      const newProds = state.stepOneProducts.products.filter((prod) =>
        prod.tipo.includes(action.payload)
      );

      return {
        ...state,
        stepOneProducts: {
          ...state.stepOneProducts,
          filteredProducts: newProds,
        },
      };
    default:
      return { ...state };
  }
};
