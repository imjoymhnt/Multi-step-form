import React, { useContext, useState } from "react";
import MultiFormContext from "../../MultiFormContext";
import BasicDetails from "./BasicDetails";
import PlanDetails from "./PlanDetails";
import { Button, message, Steps } from "antd";
import DeductableDetails from "./DeductableDetails";

const MultiStepForm = () => {
  const { policyDetails } = useContext(MultiFormContext);
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: "First",
      content: (
        <>
          <PlanDetails />{" "}
          {policyDetails.plan && (
            <BasicDetails current={current} setCurrent={setCurrent} />
          )}
        </>
      ),
    },
    {
      title: "Second",
      content: <DeductableDetails current={current} setCurrent={setCurrent} />,
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Steps current={current} items={items} />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
      {/* <PlanDetails />
      {policyDetails.plan && <BasicDetails />} */}
    </>
  );
};

export default MultiStepForm;
