import { Dispatch } from "react";

export interface IInitialState {
  steps: Step[];
  index: number;
  stepOneformValues: StepOneForm;

  stepOneProducts: {
    products: Product[];
  };

  productSelected: Product[];
  addOnsSelected: AddOns[];
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

export enum PlanType {
  monthly = "Monthly",
  yearly = "Yearly",
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

export enum IconName {
  arcade = "Arcade",
  advanced = "Advanced",
  pro = "Pro",
}

export interface AddOns {
  title: string;
  description: string;
  isSelected: boolean;
  monthlyPlan: number;
  yearlyPlan: number;
}
