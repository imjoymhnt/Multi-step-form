import { Card, Row, Col, Button, message } from "antd";
import React, { useContext } from "react";
import MultiFormContext from "../../MultiFormContext";

const Review = () => {
  const {
    policyDetails: {
      plan,
      email,
      phone,
      address1,
      address2,
      pin,
      state,
      deductibleAmt,
    },
    prev,
  } = useContext(MultiFormContext);
  const handleSubmit = () => {
    message.success("Policy Created!");
  };
  return (
    <Row>
      <Col span={12} offset={6}>
        <Card bordered>
          <p>Plan Selected: {plan}</p>
          <p>Mobile number: {phone}</p>
          <p>Email: {email}</p>
          <p>Address 01: {address1}</p>
          <p>Address 02: {address2}</p>
          <p>State: {state}</p>
          <p>Pincode: {pin}</p>
          <p>Deductible Amount: {deductibleAmt}</p>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>{" "}
          <Button onClick={prev}>Go Back</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Review;
