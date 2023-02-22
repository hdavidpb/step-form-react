import { useContext, useEffect } from "react";
import { stepsContext } from "../../context/StepsProvider";
import useValidateSelectedProducts from "../../hooks/useValidateSelectedProducts";

import * as SC from "../styled-components/styles";

import { ProductCard } from "./index";
import { createProductsAdapter } from "../../adapters/adapters";
import { getProductsData } from "../../context/stepReducer/actions";

export const StepOneCheckProducts = () => {
  const { state, dispatch } = useContext(stepsContext);
  const { stepOneProducts } = state;
  useValidateSelectedProducts();

  useEffect(() => {
    fetch(import.meta.env.VITE_API)
      .then((response) => response.json())
      .then((data) => {
        const products = createProductsAdapter(data);
        dispatch(getProductsData(products));
      });
  }, []);

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
