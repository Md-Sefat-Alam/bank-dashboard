'use client'
import React from 'react';
import { Card, Statistic } from 'antd';
import { Pie } from '@ant-design/charts';

// Dummy data
const investmentData = [
  { type: 'Stocks', value: 5000 },
  { type: 'Bonds', value: 3000 },
  { type: 'Real Estate', value: 2000 },
];

const InvestmentPortfolioSummary: React.FC = () => {
  const config = {
    appendPadding: 10,
    data: investmentData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.6,
    legend: {
      position: 'bottom',
    },
  };

  return (
    <Card title="Investment Portfolio Summary">
      <Statistic title="Total Value" value="$10,000.00" />
      <Pie {...config} />
    </Card>
  );
};

export default InvestmentPortfolioSummary;
