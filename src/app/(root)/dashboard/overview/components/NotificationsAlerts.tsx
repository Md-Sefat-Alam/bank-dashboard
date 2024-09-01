'use client'
import React from "react";
import { Alert, List, Card } from "antd";

// Dummy data
const alerts = [
  { message: "Low balance warning", type: "warning" },
  { message: "Suspicious login attempt detected", type: "error" },
  { message: "New promotion available", type: "info" },
];

const NotificationsAlerts: React.FC = () => {
  return (
    <Card title="Notifications/Alerts">
      <List
        dataSource={alerts}
        renderItem={(item) => (
          <List.Item>
            <Alert message={item.message} type={item.type as any} showIcon />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default NotificationsAlerts;
