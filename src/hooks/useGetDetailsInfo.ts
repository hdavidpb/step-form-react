import { useState, useEffect, useContext } from "react";
import { generateWappText } from "../context/stepReducer/actions";
import { stepsContext } from "../context/StepsProvider";
import { formatPrice } from "../utils/formatPrice";

const useGetDetailsInfo = () => {
  const { state, dispatch } = useContext(stepsContext);
  const { productSelected, stepOneformValues } = state;
  const [finishinTotal, setFinishingTotal] = useState({
    total: "",
  });

  const getTotalDetail = () => {
    const totalOrder = productSelected.reduce(
      (acc, plan) => acc + plan.precio * plan.count,
      0
    );

    setFinishingTotal({
      total: formatPrice(totalOrder),
    });
  };

  const getOrderText = () => {
    const { address, description, name } = stepOneformValues;
    let text = "";
    const productsText = productSelected.reduce((text, prod) => {
      return (text += `${prod.count} ${prod.nombre} \n`);
    }, "\n");

    text += `Buenas, quisiera ordenar por favor:\n${productsText} \n Para ${address}, ${description}.\n Mi nombre es: ${name}`;

    dispatch(generateWappText(text));
  };

  useEffect(() => {
    getTotalDetail();
    getOrderText();
  }, [productSelected]);

  return {
    finishinTotal,
  };
};

export default useGetDetailsInfo;
