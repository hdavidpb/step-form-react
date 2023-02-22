import { useEffect, useContext } from "react";
import { setValidStep } from "../context/stepReducer/actions";
import { stepsContext } from "../context/StepsProvider";

const useValidateFinishingOrder = () => {
  const { state, dispatch } = useContext(stepsContext);
  const { productSelected } = state;

  useEffect(() => {
    dispatch(setValidStep(productSelected.length !== 0, 2));
  }, [productSelected]);

  useEffect(() => {}, []);
};

export default useValidateFinishingOrder;
