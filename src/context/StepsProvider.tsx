import { createContext, Dispatch, useContext, useReducer } from "react";
import { StepOneForm } from "../pages/components/StepOneForm";
import { StepsContextType } from "./interfaces";
import { initialState, stepReducer } from "./stepReducer/reducer";

export const stepsContext = createContext<StepsContextType>({
  state: initialState,
  dispatch: () => {},
});

const StepsProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(stepReducer, initialState);

  return (
    <stepsContext.Provider value={{ state, dispatch }}>
      {children}
    </stepsContext.Provider>
  );
};

export default StepsProvider;
