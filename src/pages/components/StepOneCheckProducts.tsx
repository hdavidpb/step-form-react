import { useContext, useEffect } from "react";
import { stepsContext } from "../../context/StepsProvider";

import { createProductsAdapter } from "../../adapters/adapters";

import {
  fetchLoading,
  fetchSuccess,
  getProductsData,
} from "../../context/stepReducer/actions";
import useValidateSelectedProducts from "../../hooks/useValidateSelectedProducts";

import { ProductCard } from "./index";
import { LoadingBurguer } from "../../components/icons";

import * as SC from "../styled-components/styles";

export const StepOneCheckProducts = () => {
  const { state, dispatch } = useContext(stepsContext);
  const { stepOneProducts, loadingProducts } = state;
  useValidateSelectedProducts();

  useEffect(() => {
    fetch(import.meta.env.VITE_API)
      .then((response) => {
        dispatch(fetchLoading());
        return response.json();
      })
      .then((data) => {
        const products = createProductsAdapter(data);

        dispatch(getProductsData(products));
        dispatch(fetchSuccess());
      });
  }, []);

  return (
    <SC.FieldsContainer>
      <SC.CardsContainer>
        {!loadingProducts && stepOneProducts.products.length !== 0 ? (
          stepOneProducts.products.map((product) => (
            <ProductCard product={product} key={product.nombre} />
          ))
        ) : (
          <LoadingBurguer />
        )}
      </SC.CardsContainer>
    </SC.FieldsContainer>
  );
};
