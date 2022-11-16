import { Card, Button, Form, Input, Row, Col } from "antd";
import React, { useContext } from "react";
import MultiFormContext from "../../MultiFormContext";

const BasicDetails = ({ current, setCurrent }) => {
  const { handlePolicyDetails, policyDetails } = useContext(MultiFormContext);
  const onFinish = (values) => {
    handlePolicyDetails(values);
    setCurrent(current + 1);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row>
      <Col span={12} offset={6}>
        <Card title="Basic Details" hoverable>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Personal email address"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mobile number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your mobile number!",
                  len: 10,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address line 01"
              name="address1"
              rules={[
                {
                  required: true,
                  message: "Please input your Address 01!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address line 02"
              name="address2"
              rules={[
                {
                  required: true,
                  message: "Please input your Address 02!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Pincode"
              name="pin"
              rules={[
                {
                  required: true,
                  message: "Please input your Pincode!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="State"
              name="state"
              rules={[
                {
                  required: true,
                  message: "Please input your state!",
                },
              ]}
            >
              <Input />
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
        </Card>
      </Col>
    </Row>
  );
};

export default BasicDetails;
