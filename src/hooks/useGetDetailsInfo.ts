import { useState, useEffect, useContext } from "react";
import { stepsContext } from "../context/StepsProvider";
import { PlanType } from "../context/interfaces";

const useGetDetailsInfo = () => {
  const { state } = useContext(stepsContext);
  const { addOnsSelected, plansSelected, planType } = state;
  const [finishinTotal, setFinishingTotal] = useState({
    planType: "",
    total: "",
  });

  const getTotalDetail = () => {
    if (planType === PlanType.monthly) {
      const totalPlan = plansSelected.reduce(
        (acc, plan) => acc + plan.monthlyPlan,
        0
      );
      const totalAddOns = addOnsSelected.reduce(
        (acc, addOn) => acc + addOn.monthlyPlan,
        0
      );

      const total = totalPlan + totalAddOns;

      setFinishingTotal({
        planType: "Total (per month)",
        total: `+$${total}/mo`,
      });
      return;
    }
    const totalPlan = plansSelected.reduce(
      (acc, plan) => acc + plan.yearlyPlan,
      0
    );
    const totalAddOns = addOnsSelected.reduce(
      (acc, addOn) => acc + addOn.yearlyPlan,
      0
    );

    const total = totalPlan + totalAddOns;
    setFinishingTotal({
      planType: "Total (per year)",
      total: `+$${total}/yr`,
    });
  };

  useEffect(() => {
    getTotalDetail();
  }, [addOnsSelected, plansSelected, planType]);

  return {
    finishinTotal,
  };
};

export default useGetDetailsInfo;
