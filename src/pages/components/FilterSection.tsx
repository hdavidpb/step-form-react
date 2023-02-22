import * as SC from "../styled-components/styles";
import { useContext } from "react";
import { stepsContext } from "../../context/StepsProvider";
import { selectCategory } from "../../context/stepReducer/actions";
import useFilterCategories from "../../hooks/useFilterCategories";

export const FilterSection = () => {
  const { state, dispatch } = useContext(stepsContext);

  const { stepOneProducts } = state;

  useFilterCategories();

  return (
    <SC.FiltersTabContainer>
      {stepOneProducts.categories.map((category) => (
        <SC.Li
          isSelected={category.isSelected}
          key={category.type}
          onClick={() => dispatch(selectCategory(category.type))}
        >
          {category.type}
        </SC.Li>
      ))}
    </SC.FiltersTabContainer>
  );
};
