'use client'
import React from "react";
import { List, Badge, Button, Card } from "antd";

// Dummy data
const pendingApprovals = [
  { title: "Bill Payment to XYZ Corp", status: "Pending" },
  { title: "Fund Transfer to John Doe", status: "Pending" },
];

const PendingApprovals: React.FC = () => {
  return (
    <Card title="Pending Approvals">
      <List
        dataSource={pendingApprovals}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="primary">Approve</Button>,
              <Button>Reject</Button>,
            ]}
          >
            <List.Item.Meta
              title={<Badge color="blue" text={item.status} />}
              description={item.title}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default PendingApprovals;
