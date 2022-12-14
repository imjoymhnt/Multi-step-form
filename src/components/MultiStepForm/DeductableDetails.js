import { Card, Checkbox, Slider, Button, Form, message, Col, Row } from "antd";
import React, { useContext, useState } from "react";
import MultiFormContext from "../../MultiFormContext";

const DeductableDetails = () => {
  const { policyDetails, handlePolicyDetails, next, prev } =
    useContext(MultiFormContext);
  const [amount, setAmount] = useState(300000);
  const marks = {
    100000: <p>&#8377;1L</p>,
    200000: <p>&#8377;2L</p>,
    300000: <p>&#8377;3L</p>,
    500000: {
      style: {
        color: "#f50",
      },
      label: <strong>&#8377;5L</strong>,
    },
  };

  const handleChange = (value) => {
    setAmount(value);
  };

  const onFinish = (values) => {
    if (values.deductibleAmt && values.deductibleAmtConfirmation) {
      handlePolicyDetails(values);
      next();
    } else {
      message.error("Please fillup all the fields");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <h2>Select your deductable amount</h2>
        <p>Select the deductible amountfor the policy (or policies) below</p>
        <a>(what is a deductible?)</a>
        <Card title={policyDetails.plan} bordered>
          <b>{policyDetails.email}</b>
          <p>
            Sum insured of &#8377;2000000 with a deductiable of &#8377;300000
          </p>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={policyDetails}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="parent"
          >
            <Form.Item
              name="deductibleAmt"
              defaultValue={amount}
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <Slider
                marks={marks}
                max={500000}
                onChange={handleChange}
                defaultValue={0}
                value={amount}
              />
            </Form.Item>
            <br />
            <Form.Item
              name="deductibleAmtConfirmation"
              valuePropName="checked"
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <Checkbox>
                I Understand that this insurance will not be utilized until
                &#8377;300000 (deductible) is exhausted.
              </Checkbox>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Next
              </Button>
            </Form.Item>
          </Form>
          <Button style={{ marginLeft: "1rem" }} onClick={prev}>
            Go Back
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default DeductableDetails;
