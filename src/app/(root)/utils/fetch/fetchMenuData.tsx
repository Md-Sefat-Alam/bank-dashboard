import {
  AccountBookOutlined,
  AlertOutlined,
  AppstoreOutlined,
  AuditOutlined,
  BankOutlined,
  BarChartOutlined,
  BellOutlined,
  BookOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  DollarOutlined,
  FileOutlined,
  FileSearchOutlined,
  FileTextOutlined,
  FundOutlined,
  GlobalOutlined,
  LineChartOutlined,
  LockOutlined,
  MoneyCollectOutlined,
  PieChartOutlined,
  ReconciliationOutlined,
  SafetyOutlined,
  ScheduleOutlined,
  SecurityScanOutlined,
  SettingOutlined,
  ShoppingOutlined,
  SolutionOutlined,
  SwapOutlined,
  SyncOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuData } from "../../layout";

// Extended Simulated backend menu data for a Bank Management System
const fetchMenuData = async (): Promise<MenuData[]> => {
  return [
    {
      key: "1",
      label: "Dashboard",
      icon: <DashboardOutlined />,
      children: [
        { key: "1-1", label: "Overview", icon: <LineChartOutlined /> },
        { key: "1-2", label: "Statistics", icon: <BarChartOutlined /> },
      ],
    },
    {
      key: "2",
      label: "Accounts",
      icon: <UserOutlined />,
      children: [
        {
          key: "2-1",
          label: "Personal Accounts",
          icon: <AccountBookOutlined />,
          children: [
            {
              key: "2-1-1",
              label: "Savings Account",
              icon: <FundOutlined />,
              children: [
                {
                  key: "2-1-1-1",
                  label: "Transaction History",
                  icon: <FileOutlined />,
                  isLocked: true,
                },
              ],
            },
            {
              key: "2-1-2",
              label: "Checking Account",
              icon: <FundOutlined />,
            },
          ],
        },
        {
          key: "2-2",
          label: "Business Accounts",
          icon: <AccountBookOutlined />,
        },
      ],
    },
    {
      key: "3",
      label: "Transactions",
      icon: <CreditCardOutlined />,
      children: [
        {
          key: "3-1",
          label: "Payments",
          icon: <MoneyCollectOutlined />,
          children: [
            { key: "3-1-1", label: "Bill Payments", icon: <FileOutlined /> },
            { key: "3-1-2", label: "Wire Transfers", icon: <SwapOutlined /> },
          ],
        },
        {
          key: "3-2",
          label: "Loans",
          icon: <CreditCardOutlined />,
          children: [
            {
              key: "3-2-1",
              label: "Apply for Loan",
              icon: <SolutionOutlined />,
            },
            { key: "3-2-2", label: "Loan Status", icon: <FileOutlined /> },
          ],
        },
      ],
    },
    {
      key: "4",
      label: "Reports",
      icon: <BarChartOutlined />,
      children: [
        {
          key: "4-1",
          label: "Daily Reports",
          icon: <FileOutlined />,
        },
        {
          key: "4-2",
          label: "Monthly Reports",
          icon: <PieChartOutlined />,
          children: [
            {
              key: "4-2-1",
              label: "Sales Analysis",
              icon: <BarChartOutlined />,
            },
            {
              key: "4-2-2",
              label: "Expense Tracking",
              icon: <LineChartOutlined />,
            },
          ],
        },
      ],
    },
    {
      key: "5",
      label: "Banking",
      icon: <BankOutlined />,
      children: [
        { key: "5-1", label: "Account Summary", icon: <AccountBookOutlined /> },
        {
          key: "5-2",
          label: "Manage Cards",
          icon: <CreditCardOutlined />,
          children: [
            { key: "5-2-1", label: "Activate Card", icon: <FileOutlined /> },
            {
              key: "5-2-2",
              label: "Card Settings",
              icon: <SettingOutlined />,
              isLocked: true,
            },
          ],
        },
      ],
    },
    {
      key: "6",
      label: "E-commerce",
      icon: <ShoppingOutlined />,
      children: [
        { key: "6-1", label: "Orders", icon: <FileOutlined /> },
        { key: "6-2", label: "Products", icon: <AppstoreOutlined /> },
      ],
    },
    {
      key: "7",
      label: "Notifications",
      icon: <BellOutlined />,
      children: [
        { key: "7-1", label: "Alerts", icon: <AlertOutlined /> },
        { key: "7-2", label: "Messages", icon: <SolutionOutlined /> },
      ],
    },
    {
      key: "8",
      label: "Teams",
      icon: <TeamOutlined />,
      children: [
        {
          key: "8-1",
          label: "Management",
          icon: <UserOutlined />,
          children: [
            { key: "8-1-1", label: "Team 1", icon: <UserOutlined /> },
            { key: "8-1-2", label: "Team 2", icon: <UserOutlined /> },
          ],
        },
        {
          key: "8-2",
          label: "Staff",
          icon: <UserOutlined />,
        },
      ],
    },
    {
      key: "9",
      label: "Security",
      icon: <LockOutlined />,
      children: [
        { key: "9-1", label: "Access Control", icon: <SafetyOutlined /> },
        {
          key: "9-2",
          label: "Audit Logs",
          icon: <SecurityScanOutlined />,
          isLocked: true,
        },
      ],
    },
    {
      key: "10",
      label: "Settings",
      icon: <SettingOutlined />,
      isLocked: true,
      children: [
        { key: "10-1", label: "Profile Settings", icon: <UserOutlined /> },
        { key: "10-2", label: "System Settings", icon: <SettingOutlined /> },
      ],
    },
    // New 10 items
    {
      key: "11",
      label: "Investment",
      icon: <FundOutlined />,
      children: [
        {
          key: "11-1",
          label: "Portfolio",
          icon: <LineChartOutlined />,
        },
        {
          key: "11-2",
          label: "Investment Plans",
          icon: <DollarOutlined />,
        },
      ],
    },
    {
      key: "12",
      label: "Compliance",
      icon: <AuditOutlined />,
      children: [
        {
          key: "12-1",
          label: "Regulatory Reports",
          icon: <FileSearchOutlined />,
        },
        { key: "12-2", label: "Internal Audits", icon: <FileTextOutlined /> },
      ],
    },
    {
      key: "13",
      label: "Audit",
      icon: <ReconciliationOutlined />,
      children: [
        { key: "13-1", label: "Audit History", icon: <FileOutlined /> },
        { key: "13-2", label: "Scheduled Audits", icon: <ScheduleOutlined /> },
      ],
    },
    {
      key: "14",
      label: "Currency Exchange",
      icon: <GlobalOutlined />,
      children: [
        {
          key: "14-1",
          label: "Currency Rates",
          icon: <LineChartOutlined />,
        },
        {
          key: "14-2",
          label: "Convert Currency",
          icon: <SyncOutlined />,
        },
      ],
    },
    {
      key: "15",
      label: "Insurance",
      icon: <SafetyOutlined />,
      children: [
        { key: "15-1", label: "Policy Management", icon: <SolutionOutlined /> },
        { key: "15-2", label: "Claims", icon: <FileTextOutlined /> },
      ],
    },
    {
      key: "16",
      label: "Risk Management",
      icon: <AlertOutlined />,
      children: [
        {
          key: "16-1",
          label: "Risk Assessments",
          icon: <FileOutlined />,
        },
        {
          key: "16-2",
          label: "Mitigation Plans",
          icon: <SafetyOutlined />,
        },
      ],
    },
    {
      key: "17",
      label: "Loans Management",
      icon: <MoneyCollectOutlined />,
      children: [
        { key: "17-1", label: "Loan Calculator", icon: <DollarOutlined /> },
        { key: "17-2", label: "Repayment Plans", icon: <SolutionOutlined /> },
      ],
    },
    {
      key: "18",
      label: "Customer Service",
      icon: <TeamOutlined />,
      children: [
        {
          key: "18-1",
          label: "Support Tickets",
          icon: <SolutionOutlined />,
        },
        {
          key: "18-2",
          label: "Live Chat",
          icon: <UserOutlined />,
        },
      ],
    },
    {
      key: "19",
      label: "Fraud Detection",
      icon: <SecurityScanOutlined />,
      children: [
        {
          key: "19-1",
          label: "Suspicious Activities",
          icon: <FileSearchOutlined />,
        },
        {
          key: "19-2",
          label: "Fraud Reports",
          icon: <AlertOutlined />,
        },
      ],
    },
    {
      key: "20",
      label: "Budgeting",
      icon: <DollarOutlined />,
      children: [
        {
          key: "20-1",
          label: "Expense Tracker",
          icon: <FileOutlined />,
        },
        {
          key: "20-2",
          label: "Budget Planner",
          icon: <SolutionOutlined />,
        },
      ],
    },
    {
      key: "21",
      label: "Performance Management",
      icon: <LineChartOutlined />,
      children: [
        {
          key: "21-1",
          label: "KPI Dashboard",
          icon: <BarChartOutlined />,
        },
        {
          key: "21-2",
          label: "Performance Reports",
          icon: <FileTextOutlined />,
        },
        {
          key: "21-3",
          label: "Employee Evaluation",
          icon: <UserOutlined />,
          isLocked: true,
        },
      ],
    },
    {
      key: "22",
      label: "Compliance Monitoring",
      icon: <SafetyOutlined />,
      children: [
        {
          key: "22-1",
          label: "Policy Compliance",
          icon: <FileTextOutlined />,
        },
        {
          key: "22-2",
          label: "Regulatory Updates",
          icon: <BookOutlined />,
        },
      ],
    },
    {
      key: "23",
      label: "Financial Planning",
      icon: <PieChartOutlined />,
      children: [
        {
          key: "23-1",
          label: "Investment Advisory",
          icon: <FundOutlined />,
        },
        {
          key: "23-2",
          label: "Wealth Management",
          icon: <LineChartOutlined />,
        },
      ],
    },
    {
      key: "24",
      label: "Compliance & Legal",
      icon: <AuditOutlined />,
      children: [
        {
          key: "24-1",
          label: "Legal Documents",
          icon: <FileOutlined />,
        },
        {
          key: "24-2",
          label: "Regulatory Compliance",
          icon: <SecurityScanOutlined />,
        },
      ],
    },
    {
      key: "25",
      label: "Customer Feedback",
      icon: <SolutionOutlined />,
      children: [
        {
          key: "25-1",
          label: "Surveys",
          icon: <FileTextOutlined />,
        },
        {
          key: "25-2",
          label: "Feedback Reports",
          icon: <BookOutlined />,
        },
      ],
    },
    {
      key: "26",
      label: "Data Management",
      icon: <DatabaseOutlined />,
      children: [
        {
          key: "26-1",
          label: "Data Backup",
          icon: <SyncOutlined />,
        },
        {
          key: "26-2",
          label: "Data Recovery",
          icon: <FileSearchOutlined />,
        },
      ],
    },
    {
      key: "27",
      label: "Internal Communications",
      icon: <BellOutlined />,
      children: [
        {
          key: "27-1",
          label: "Announcements",
          icon: <AlertOutlined />,
        },
        {
          key: "27-2",
          label: "Meeting Schedules",
          icon: <ScheduleOutlined />,
        },
      ],
    },
  ];
};

export default fetchMenuData;
