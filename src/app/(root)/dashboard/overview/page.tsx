import React from "react";
import AccountSummary from "./components/AccountSummary";
import RecentTransactions from "./components/RecentTransactions";
import NotificationsAlerts from "./components/NotificationsAlerts";
import PendingApprovals from "./components/PendingApprovals";
import QuickActions from "./components/QuickActions";
import CreditScoreOverview from "./components/CreditScoreOverview";
import ScheduledPayments from "./components/ScheduledPayments";
import RecentAccountActivity from "./components/RecentAccountActivity";
import LoanStatusOverview from "./components/LoanStatusOverview";
import InvestmentPortfolioSummary from "./components/InvestmentPortfolioSummary";

type Props = {};

export default function Overview({}: Props) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <CreditScoreOverview />
      <ScheduledPayments />
      <RecentAccountActivity />
      <LoanStatusOverview />
      <NotificationsAlerts />
      <AccountSummary />
      <RecentTransactions />
      <InvestmentPortfolioSummary />
      <PendingApprovals />
      <QuickActions />
    </div>
  );
}
