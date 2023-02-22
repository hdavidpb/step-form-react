import { Dispatch } from "react";

export interface IInitialState {
  steps: Step[];
  index: number;
  stepOneformValues: StepOneForm;

  stepOneProducts: {
    categories: Category[];
    products: Product[];
    filteredProducts: Product[];
  };
  loadingProducts: boolean;
  productSelected: Product[];
  wappText: string;
}

export interface StepOneForm {
  payMethod: string;
  address: string;
  description: string;
}

export interface Product {
  nombre: string;
  tipo: string;
  precio: number;
  imagen: string;
  isSelected?: boolean;
  count: number;
}

export interface Category {
  type: string;
  isSelected: boolean;
}

export interface Step {
  title: string;
  description: string;
  isCompleted: boolean;
  caption?: string;
}

export type Action = {
  type: any;
  payload: any;
};

export type StepsContextType = {
  state: IInitialState;
  dispatch: Dispatch<Action>;
};
