import { Action, IInitialState, Step, PlanType } from "../interfaces";
import { StepTreeForm } from "../../pages/components/StepTreeForm";

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

const steps: Step[] = [
  {
    caption: "YOUR INFO",
    title: "Personal info",
    description: "Please provide your name, email address and phone number",
    isCompleted: false,
  },
  {
    caption: "SELECT PLAN",
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing ",
    isCompleted: true,
  },
  {
    caption: "ADD-ONS",
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience",
    isCompleted: true,
  },

  {
    caption: "SUMMARY",
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
    isCompleted: true,
  },
  {
    title: "Thank you!",
    description:
      "Thanks for confirming your subscription! We hope you have fun using your subscription our platform. If you ever need support, please feel free to email us atsupport@loremgaming.com.",
    isCompleted: true,
  },
];
export const initialState: IInitialState = {
  steps,
  index: 0,
  stepOneformValues: {
    name: "",
    email: "",
    phoneNumber: "",
  },

  stepTwoFormValues: {
    plans: [
      {
        title: "Arcade",
        isSelected: true,
        monthlyPlan: 9,
        yearlyPlan: 90,
      },
      {
        title: "Advanced",
        isSelected: false,
        monthlyPlan: 12,
        yearlyPlan: 120,
      },
      {
        title: "Pro",
        isSelected: false,
        monthlyPlan: 15,
        yearlyPlan: 150,
      },
    ],
  },
  planType: PlanType.monthly,
  stepTreeFormValues: {
    addOns: [
      {
        title: "Online service",
        description: "Access to multiplayer games",
        isSelected: true,
        monthlyPlan: 1,
        yearlyPlan: 10,
      },
      {
        title: "Larger store",
        description: "Extra 1TB of cloud save",
        isSelected: false,
        monthlyPlan: 2,
        yearlyPlan: 20,
      },
      {
        title: "Customizable profile",
        description: "Custom theme on your profile",
        isSelected: false,
        monthlyPlan: 2,
        yearlyPlan: 20,
      },
    ],
  },
  addOnsSelected: [],
  plansSelected: [],
};

export const stepReducer = (
  state: IInitialState = initialState,
  action: Action
): IInitialState => {
  switch (action.type) {
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
    case IS_INVALIDVALID:
      const stepsWithFalse = state.steps.map((step, idx) => {
        if (idx === action.payload) return { ...step, isCompleted: false };
        return step;
      });

      return { ...state, steps: stepsWithFalse };
    case CHANGE_STEP_TWO_PLAN_TYPE:
      return {
        ...state,
        planType: action.payload,
      };
    case SELECT_OR_UNSELECT_PLAN:
      const newPlans = state.stepTwoFormValues.plans.map((plan) =>
        plan.title === action.payload
          ? { ...plan, isSelected: true }
          : { ...plan, isSelected: false }
      );
      const selectedPlans = newPlans.filter((plan) => plan.isSelected);

      return {
        ...state,
        stepTwoFormValues: { ...state.stepTwoFormValues, plans: newPlans },
        plansSelected: selectedPlans,
      };
    case SELECT_OR_UNSELECT_ADD_ON:
      const newAddOns = state.stepTreeFormValues.addOns.map((addOn) =>
        addOn.title === action.payload
          ? { ...addOn, isSelected: !addOn.isSelected }
          : addOn
      );
      const selectedAddOns = newAddOns.filter((addOn) => addOn.isSelected);
      return {
        ...state,
        stepTreeFormValues: { addOns: newAddOns },
        addOnsSelected: selectedAddOns,
      };
    case CHANGE_PLAN_TYPE:
      return { ...state, index: action.payload };
    default:
      return { ...state };
  }
};
