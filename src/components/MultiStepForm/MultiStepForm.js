import React, { useContext } from "react";
import MultiFormContext, { MultiFormProvider } from "../../MultiFormContext";
import BasicDetails from "./BasicDetails";
import PlanDetails from "./PlanDetails";
import PlanHeader from "./PlanHeader";

const MultiStepForm = () => {
  const { policyDetails } = useContext(MultiFormContext);
  console.log(policyDetails);
  return (
    <>
      <PlanHeader />
      <PlanDetails />
      {policyDetails.plan && <BasicDetails />}
    </>
  );
};

export default MultiStepForm;
