'use client'
import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

// Dummy data
const accountData = [
  {
    accountType: "Checking",
    balance: "$3,500.00",
    lastChange: "+$150.00",
  },
  {
    accountType: "Savings",
    balance: "$10,250.00",
    lastChange: "+$250.00",
  },
  {
    accountType: "Credit Card",
    balance: "$1,200.00",
    lastChange: "-$300.00",
  },
];

const AccountSummary: React.FC = () => {
  return (
    <Card title="Account Summary" bordered={false} style={{ width: "100%" }}>
      <Row gutter={[16, 16]}>
        {accountData.map((account, index) => (
          <Col span={8} key={index}>
            <Card hoverable bordered={true}>
              <Title level={4}>{account.accountType}</Title>
              <Text strong>Balance: {account.balance}</Text>
              <br />
              <Text
                type={account.lastChange.startsWith("+") ? "success" : "danger"}
              >
                Recent Change: {account.lastChange}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default AccountSummary;
