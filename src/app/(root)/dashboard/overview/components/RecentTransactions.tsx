'use client'
import React from 'react';
import { List, Card, Typography } from 'antd';

const { Title, Text } = Typography;

// Dummy data
const transactions = [
  { date: '2024-08-30', amount: '+$250.00', type: 'Credit' },
  { date: '2024-08-29', amount: '-$50.00', type: 'Debit' },
  { date: '2024-08-28', amount: '+$1000.00', type: 'Credit' },
];

const RecentTransactions: React.FC = () => {
  return (
    <Card title="Recent Transactions">
      <List
        dataSource={transactions}
        renderItem={(item) => (
          <List.Item>
            <Card>
              <Title level={5}>{item.date}</Title>
              <Text type={item.type === 'Credit' ? 'success' : 'danger'}>
                {item.amount} ({item.type})
              </Text>
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default RecentTransactions;
