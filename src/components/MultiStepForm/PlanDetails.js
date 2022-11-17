import { Card, Col, Row, Select } from "antd";
import React, { useContext } from "react";
import MultiFormContext from "../../MultiFormContext";
import PlanHeader from "./PlanHeader";

const PlanDetails = () => {
  const { handlePolicyDetails, policyDetails } = useContext(MultiFormContext);
  const handleChange = (value) => {
    handlePolicyDetails({ plan: value });
  };

  const options = [
    {
      value: "self - 600",
      label: <p>Self - &#8377;600</p>,
    },
    {
      value: "parents - 600",
      label: <p>Parents - &#8377;600</p>,
    },
    {
      value: "self + parents - 1000",
      label: <p>Self + Parents - &#8377;1000</p>,
    },
    {
      value: "self + spouse + kids - 1500",
      label: <p>Self + Spouse + Kids - &#8377;1500</p>,
    },
  ];
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <PlanHeader />
          <Card title="Plan Details" hoverable>
            <p>Your plan type</p>
            <Select
              style={{
                width: "100%",
              }}
              placeholder="Select your plan"
              onChange={handleChange}
              options={options}
              defaultValue={policyDetails.plan}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlanDetails;
