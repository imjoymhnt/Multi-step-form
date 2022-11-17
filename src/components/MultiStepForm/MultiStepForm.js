import React, { useContext, useState } from "react";
import MultiFormContext from "../../MultiFormContext";
import BasicDetails from "./BasicDetails";
import PlanDetails from "./PlanDetails";
import { Button, message, Steps } from "antd";
import DeductableDetails from "./DeductableDetails";
import DeclarationDetails from "./DeclarationDetails";
import Review from "./Review";

const MultiStepForm = () => {
  const { policyDetails, current } = useContext(MultiFormContext);
  const steps = [
    {
      title: "Choose Plan",
      content: (
        <>
          <PlanDetails /> {policyDetails.plan && <BasicDetails />}
        </>
      ),
    },
    {
      title: "Select Deductible amount",
      content: <DeductableDetails />,
    },
    {
      title: "Declaration",
      content: <DeclarationDetails />,
    },
    {
      title: "Review & Confirm",
      content: <Review />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Steps
        current={current}
        items={items}
        style={{ width: "90%", margin: "auto", marginTop: "1rem" }}
      />
      <div className="steps-content">{steps[current].content}</div>
    </>
  );
};

export default MultiStepForm;
