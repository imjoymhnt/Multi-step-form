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
        <Card bordered style={{}}>
          <p>
            <b>Plan Selected:</b> {plan}
          </p>
          <p>
            <b>Mobile number:</b> {phone}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Address 01:</b> {address1}
          </p>
          <p>
            <b>Address 02:</b> {address2}
          </p>
          <p>
            <b>State:</b> {state}
          </p>
          <p>
            <b>Pincode:</b> {pin}
          </p>
          <p>
            <b>Deductible Amount:</b> {deductibleAmt}
          </p>
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
