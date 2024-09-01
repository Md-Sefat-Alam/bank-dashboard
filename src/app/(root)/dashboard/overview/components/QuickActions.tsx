'use client'
import React from 'react';
import { Button, Card, Row, Col } from 'antd';

const QuickActions: React.FC = () => {
  return (
    <Card title="Quick Actions">
      <Row gutter={16}>
        <Col span={8}>
          <Button type="primary" block>Transfer Money</Button>
        </Col>
        <Col span={8}>
          <Button type="primary" block>Pay Bills</Button>
        </Col>
        <Col span={8}>
          <Button type="primary" block>Manage Cards</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default QuickActions;
