import { Button, Checkbox, Col, Form, message, Row } from "antd";
import React, { useContext } from "react";
import MultiFormContext from "../../MultiFormContext";

const DeclarationDetails = () => {
  const { handlePolicyDetails, policyDetails, next, prev } =
    useContext(MultiFormContext);
  const onFinish = (values) => {
    if (
      values.drugConfirmation &&
      values.goodHealthConfirmation &&
      values.waitingPeriodConfirmation &&
      values.preExistingDiseaasesConfirmation
    ) {
      handlePolicyDetails(values);
      next();
    } else {
      message.error("Please check all the policy");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row>
      <Col span={12} offset={6}>
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
        >
          <Form.Item
            name="drugConfirmation"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>
              I heareby declare that none of the proposed members are habitual
              consumers of alcohol, tobacco, gutka or any recreatational drugs.
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="goodHealthConfirmation"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>
              I hereby declare that all proposed members are in good health and
              entirely free from any mental pf physical impairements or
              deformities, disease/condition.
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="waitingPeriodConfirmation"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>
              I have understood that there is 30 days waiting period for all
              diseases and 2 years on named ailments. (list of named ailements)
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="preExistingDiseaasesConfirmation"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>
              I understand that this policy doesn't cover Pre-existing diseases.
            </Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={prev} style={{ marginLeft: "35%" }}>
          Go Back
        </Button>
      </Col>
    </Row>
  );
};

export default DeclarationDetails;
