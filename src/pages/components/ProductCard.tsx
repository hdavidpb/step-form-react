import { useContext } from "react";
import { Product } from "../../context/interfaces";
import {
  increaseBy,
  selectOrUnselectProduct,
  unSelectProduct,
} from "../../context/stepReducer/actions";
import { stepsContext } from "../../context/StepsProvider";

import * as SC from "../styled-components/styles";
import { parsePrice } from "../../utils/parsePrice";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { isSelected, imagen, nombre, precio, count } = product;
  const { dispatch } = useContext(stepsContext);

  const handleIncreaseBy = (increaseNumber: number) => {
    dispatch(increaseBy(nombre, increaseNumber));
    if (count === 1 && increaseNumber === -1) {
      dispatch(unSelectProduct(nombre));
      return;
    }

    dispatch(selectOrUnselectProduct(nombre));
  };

  return (
    <SC.ProductCard isSelected={isSelected! && count !== 0} key={nombre}>
      {count !== 0 && (
        <SC.SelectedCount>
          <h1>{count}</h1>
        </SC.SelectedCount>
      )}
      <SC.Image src={imagen} alt="gemela" />
      <SC.CardDescription>
        <h4>{nombre}</h4>
        <span>{parsePrice(precio)}</span>
      </SC.CardDescription>
      <SC.CardFooter>
        <button disabled={count === 0} onClick={() => handleIncreaseBy(-1)}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => handleIncreaseBy(1)}>+</button>
      </SC.CardFooter>
    </SC.ProductCard>
  );
};
