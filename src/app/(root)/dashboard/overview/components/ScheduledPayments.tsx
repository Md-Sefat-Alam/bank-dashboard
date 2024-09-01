'use client'
import React from "react";
import { Card, Timeline } from "antd";

// Dummy data
const scheduledPayments = [
  { date: "2024-09-01", description: "Rent Payment", amount: "$1,200.00" },
  { date: "2024-09-05", description: "Utility Bill", amount: "$75.00" },
];

const ScheduledPayments: React.FC = () => {
  return (
    <Card title="Scheduled Payments">
      <Timeline>
        {scheduledPayments.map((payment, index) => (
          <Timeline.Item key={index}>
            {payment.date} - {payment.description}: {payment.amount}
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default ScheduledPayments;
