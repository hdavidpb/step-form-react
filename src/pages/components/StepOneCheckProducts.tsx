import { useContext } from "react";
import { stepsContext } from "../../context/StepsProvider";

import * as SC from "../styled-components/styles";

import { ProductCard } from "./index";

export const StepOneCheckProducts = () => {
  const { state } = useContext(stepsContext);
  const { stepOneProducts } = state;

  return (
    <SC.FieldsContainer>
      <SC.CardsContainer>
        {stepOneProducts.products.map((product) => (
          <ProductCard product={product} key={product.nombre} />
        ))}
      </SC.CardsContainer>
    </SC.FieldsContainer>
  );
};
