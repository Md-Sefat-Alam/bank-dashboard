'use client'
import React from "react";
import { Card, Statistic, Popover } from "antd";

// Dummy data
const creditScore = 750;

const CreditScoreOverview: React.FC = () => {
  return (
    <Card title="Credit Score Overview">
      <Popover
        content={
          <p>
            Your credit score is influenced by your payment history, credit
            utilization, and other factors.
          </p>
        }
      >
        <Statistic title="Credit Score" value={creditScore} />
      </Popover>
    </Card>
  );
};

export default CreditScoreOverview;
