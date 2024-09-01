'use client'
import React from 'react';
import { Card, Statistic, Progress } from 'antd';

// Dummy data
const loan = {
  balance: '$5,000.00',
  nextPaymentDue: '2024-09-10',
  interestRate: '3.5%',
  repaymentProgress: 50, // percentage
};

const LoanStatusOverview: React.FC = () => {
  return (
    <Card title="Loan Status Overview">
      <Statistic title="Remaining Balance" value={loan.balance} />
      <Statistic title="Next Payment Due" value={loan.nextPaymentDue} />
      <Statistic title="Interest Rate" value={loan.interestRate} />
      <Progress percent={loan.repaymentProgress} />
    </Card>
  );
};

export default LoanStatusOverview;
