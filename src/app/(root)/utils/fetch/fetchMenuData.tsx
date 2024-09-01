import {
  AccountBookOutlined,
  AlertOutlined,
  AppstoreOutlined,
  AuditOutlined,
  BankOutlined,
  BarChartOutlined,
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
  NotificationOutlined,
  ShoppingCartOutlined,
  CarOutlined,
  BellOutlined,
  WechatOutlined,
  MessageOutlined,
  CustomerServiceOutlined,
  DollarCircleOutlined,
  ContactsOutlined,
  UsergroupAddOutlined,
  RadarChartOutlined,
  WarningOutlined,
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
        {
          key: "1-1",
          label: "Overview",
          icon: <LineChartOutlined />,
          url: "/dashboard/overview",
        },
        {
          key: "1-2",
          label: "Statistics",
          icon: <BarChartOutlined />,
          url: "/dashboard/statistics",
        },
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
                  url: "/accounts/personal/savings/transaction-history",
                  isLocked: true,
                },
              ],
            },
            {
              key: "2-1-2",
              label: "Checking Account",
              icon: <FundOutlined />,
              url: "/accounts/personal/checking",
            },
          ],
        },
        {
          key: "2-2",
          label: "Business Accounts",
          icon: <AccountBookOutlined />,
          url: "/accounts/business",
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
            {
              key: "3-1-1",
              label: "Bill Payments",
              icon: <FileOutlined />,
              url: "/transactions/payments/bill-payments",
            },
            {
              key: "3-1-2",
              label: "Wire Transfers",
              icon: <SwapOutlined />,
              url: "/transactions/payments/wire-transfers",
            },
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
              url: "/transactions/loans/apply",
            },
            {
              key: "3-2-2",
              label: "Loan Status",
              icon: <FileOutlined />,
              url: "/transactions/loans/status",
            },
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
          url: "/reports/daily",
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
              url: "/reports/monthly/sales-analysis",
            },
            {
              key: "4-2-2",
              label: "Expense Tracking",
              icon: <LineChartOutlined />,
              url: "/reports/monthly/expense-tracking",
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
        {
          key: "5-1",
          label: "Account Summary",
          icon: <AccountBookOutlined />,
          url: "/banking/account-summary",
        },
        {
          key: "5-2",
          label: "Manage Cards",
          icon: <CreditCardOutlined />,
          children: [
            {
              key: "5-2-1",
              label: "Activate Card",
              icon: <FileOutlined />,
              url: "/banking/manage-cards/activate",
            },
            {
              key: "5-2-2",
              label: "Card Settings",
              icon: <SettingOutlined />,
              url: "/banking/manage-cards/settings",
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
        {
          key: "6-1",
          label: "Orders",
          icon: <FileOutlined />,
          url: "/ecommerce/orders",
        },
        {
          key: "6-2",
          label: "Products",
          icon: <AppstoreOutlined />,
          url: "/ecommerce/products",
        },
      ],
    },
    {
      key: "7",
      label: "Notifications",
      icon: <BellOutlined />,
      children: [
        {
          key: "7-1",
          label: "Alerts",
          icon: <AlertOutlined />,
          url: "/notifications/alerts",
        },
        {
          key: "7-2",
          label: "Messages",
          icon: <SolutionOutlined />,
          url: "/notifications/messages",
        },
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
            {
              key: "8-1-1",
              label: "Team 1",
              icon: <UserOutlined />,
              url: "/teams/management/team1",
            },
            {
              key: "8-1-2",
              label: "Team 2",
              icon: <UserOutlined />,
              url: "/teams/management/team2",
            },
          ],
        },
        {
          key: "8-2",
          label: "Staff",
          icon: <UserOutlined />,
          url: "/teams/staff",
        },
      ],
    },
    {
      key: "9",
      label: "Security",
      icon: <LockOutlined />,
      children: [
        {
          key: "9-1",
          label: "Access Control",
          icon: <SafetyOutlined />,
          url: "/security/access-control",
        },
        {
          key: "9-2",
          label: "Audit Logs",
          icon: <SecurityScanOutlined />,
          url: "/security/audit-logs",
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
        {
          key: "10-1",
          label: "Profile Settings",
          icon: <UserOutlined />,
          url: "/settings/profile",
        },
        {
          key: "10-2",
          label: "System Settings",
          icon: <SettingOutlined />,
          url: "/settings/system",
        },
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
          url: "/investment/portfolio",
        },
        {
          key: "11-2",
          label: "Investment Plans",
          icon: <DollarOutlined />,
          url: "/investment/plans",
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
          url: "/compliance/regulatory-reports",
        },
        {
          key: "12-2",
          label: "Internal Audits",
          icon: <FileTextOutlined />,
          url: "/compliance/internal-audits",
        },
      ],
    },
    {
      key: "13",
      label: "Audit",
      icon: <ReconciliationOutlined />,
      children: [
        {
          key: "13-1",
          label: "Audit History",
          icon: <FileOutlined />,
          url: "/audit/history",
        },
        {
          key: "13-2",
          label: "Scheduled Audits",
          icon: <ScheduleOutlined />,
          url: "/audit/scheduled",
        },
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
          url: "/currency-exchange/rates",
        },
        {
          key: "14-2",
          label: "Convert Currency",
          icon: <SyncOutlined />,
          url: "/currency-exchange/convert",
        },
      ],
    },
    {
      key: "15",
      label: "Insurance",
      icon: <SafetyOutlined />,
      children: [
        {
          key: "15-1",
          label: "Policy Management",
          icon: <SolutionOutlined />,
          url: "/insurance/policy-management",
        },
        {
          key: "15-2",
          label: "Claims",
          icon: <FileTextOutlined />,
          url: "/insurance/claims",
        },
      ],
    },
    {
      key: "16",
      label: "Risk Management",
      icon: <WarningOutlined />,
      children: [
        {
          key: "16-1",
          label: "Risk Assessment",
          icon: <RadarChartOutlined />,
          url: "/risk-management/assessment",
        },
        {
          key: "16-2",
          label: "Mitigation Plans",
          icon: <SolutionOutlined />,
          url: "/risk-management/mitigation-plans",
        },
      ],
    },
    {
      key: "17",
      label: "Human Resources",
      icon: <UsergroupAddOutlined />,
      children: [
        {
          key: "17-1",
          label: "Employee Directory",
          icon: <ContactsOutlined />,
          url: "/human-resources/employee-directory",
        },
        {
          key: "17-2",
          label: "Payroll Management",
          icon: <DollarCircleOutlined />,
          url: "/human-resources/payroll",
        },
      ],
    },
    {
      key: "18",
      label: "Customer Support",
      icon: <CustomerServiceOutlined />,
      children: [
        {
          key: "18-1",
          label: "Ticketing System",
          icon: <MessageOutlined />,
          url: "/customer-support/ticketing",
        },
        {
          key: "18-2",
          label: "Live Chat",
          icon: <WechatOutlined />,
          url: "/customer-support/live-chat",
        },
      ],
    },
    {
      key: "19",
      label: "Marketing",
      icon: <BellOutlined />,
      children: [
        {
          key: "19-1",
          label: "Campaigns",
          icon: <NotificationOutlined />,
          url: "/marketing/campaigns",
        },
        {
          key: "19-2",
          label: "Analytics",
          icon: <BarChartOutlined />,
          url: "/marketing/analytics",
        },
      ],
    },
    {
      key: "20",
      label: "Operations",
      icon: <SettingOutlined />,
      children: [
        {
          key: "20-1",
          label: "Logistics",
          icon: <CarOutlined />,
          url: "/operations/logistics",
        },
        {
          key: "20-2",
          label: "Procurement",
          icon: <ShoppingCartOutlined />,
          url: "/operations/procurement",
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
          url: "/performance-management/kpi-dashboard",
        },
        {
          key: "21-2",
          label: "Performance Reports",
          icon: <FileTextOutlined />,
          url: "/performance-management/reports",
        },
        {
          key: "21-3",
          label: "Employee Evaluation",
          icon: <UserOutlined />,
          url: "/performance-management/employee-evaluation",
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
          url: "/compliance-monitoring/policy-compliance",
        },
        {
          key: "22-2",
          label: "Regulatory Updates",
          icon: <BookOutlined />,
          url: "/compliance-monitoring/regulatory-updates",
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
          url: "/financial-planning/investment-advisory",
        },
        {
          key: "23-2",
          label: "Wealth Management",
          icon: <LineChartOutlined />,
          url: "/financial-planning/wealth-management",
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
          url: "/compliance-legal/legal-documents",
        },
        {
          key: "24-2",
          label: "Regulatory Compliance",
          icon: <SecurityScanOutlined />,
          url: "/compliance-legal/regulatory-compliance",
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
          url: "/customer-feedback/surveys",
        },
        {
          key: "25-2",
          label: "Feedback Reports",
          icon: <BookOutlined />,
          url: "/customer-feedback/feedback-reports",
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
          url: "/data-management/backup",
        },
        {
          key: "26-2",
          label: "Data Recovery",
          icon: <FileSearchOutlined />,
          url: "/data-management/recovery",
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
          url: "/internal-communications/announcements",
        },
        {
          key: "27-2",
          label: "Meeting Schedules",
          icon: <ScheduleOutlined />,
          url: "/internal-communications/meeting-schedules",
        },
      ],
    },
  ];
};

export default fetchMenuData;
