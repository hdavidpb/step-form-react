import { Dispatch } from "react";

export interface IInitialState {
  steps: Step[];
  index: number;
  stepOneformValues: StepOneForm;
  planType: PlanType;
  stepTwoFormValues: {
    plans: Plan[];
  };

  stepTreeFormValues: {
    addOns: AddOns[];
  };
  plansSelected: Plan[];
  addOnsSelected: AddOns[];
}

export interface StepOneForm {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface Plan {
  title: string;
  isSelected: boolean;
  monthlyPlan: number;
  yearlyPlan: number;
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
