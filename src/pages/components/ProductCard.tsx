import { useContext } from "react";
import { Product } from "../../context/interfaces";
import {
  increaseBy,
  selectOrUnselectProduct,
} from "../../context/stepReducer/actions";
import { stepsContext } from "../../context/StepsProvider";

import * as SC from "../styled-components/styles";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { isSelected, imagen, nombre, precio, count } = product;
  const { dispatch } = useContext(stepsContext);

  const handleIncreaseBy = (productName: string, increaseNumber: number) => {
    dispatch(increaseBy(productName, increaseNumber));
  };

  return (
    <SC.ProductCard
      isSelected={isSelected! && count !== 0}
      key={nombre}
      onClick={() => dispatch(selectOrUnselectProduct(nombre))}
    >
      <SC.Image src={imagen} alt="gemela" />
      <SC.CardDescription>
        <h4>{nombre}</h4>
        <span>{`$ ${precio}`}</span>
      </SC.CardDescription>
      <SC.CardFooter>
        <button
          disabled={count === 0}
          onClick={() => handleIncreaseBy(nombre, -1)}
        >
          -
        </button>
        <span>{count}</span>
        <button onClick={(e) => handleIncreaseBy(nombre, 1)}>+</button>
      </SC.CardFooter>
    </SC.ProductCard>
  );
};
