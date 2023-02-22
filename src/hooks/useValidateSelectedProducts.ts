import { useEffect, useContext } from "react";
import { stepsContext } from "../context/StepsProvider";
import { isInValid, isValidStep } from "../context/stepReducer/actions";
const useValidateSelectedProducts = () => {
  const { dispatch, state } = useContext(stepsContext);

  const { productSelected } = state;

  useEffect(() => {
    if (productSelected.reduce((acc, prod) => acc + prod.count, 0) > 0) {
      dispatch(isValidStep(0));
    } else {
      dispatch(isInValid(0));
    }
  }, [productSelected]);
};

export default useValidateSelectedProducts;
