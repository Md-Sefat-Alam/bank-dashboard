'use client'
import React from "react";
import { List, Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

// Dummy data
const recentActivity = [
  {
    date: "2024-08-30",
    action: "Deposit $250.00",
    icon: <ArrowUpOutlined style={{ marginRight: 8 }} />,
  },
  {
    date: "2024-08-29",
    action: "Withdrawal $50.00",
    icon: <ArrowDownOutlined style={{ marginRight: 8 }} />,
  },
];

const RecentAccountActivity: React.FC = () => {
  return (
    <Card title="Recent Account Activity">
      <List
        dataSource={recentActivity}
        renderItem={(item) => (
          <List.Item>
            {item.icon}
            {item.date} - {item.action}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default RecentAccountActivity;
