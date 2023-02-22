import { useEffect, useContext } from "react";
import { Category } from "../context/interfaces";
import { filterByCategorytype } from "../context/stepReducer/actions";
import { stepsContext } from "../context/StepsProvider";

const useFilterCategories = () => {
  const { state, dispatch } = useContext(stepsContext);
  const { stepOneProducts } = state;

  useEffect(() => {
    const categorySelected = stepOneProducts.categories.reduce(
      (acc, category) => {
        if (category.isSelected) {
          acc = category;
        }
        return acc;
      },
      { isSelected: false, type: "" }
    );

    dispatch(filterByCategorytype(categorySelected.type));
  }, [stepOneProducts.categories]);
};

export default useFilterCategories;
