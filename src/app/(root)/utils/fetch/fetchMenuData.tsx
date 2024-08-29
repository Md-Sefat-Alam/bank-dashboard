import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BankOutlined,
  CreditCardOutlined,
  FundOutlined,
  SettingOutlined,
  ShoppingOutlined,
  BellOutlined,
  DashboardOutlined,
  WalletOutlined,
  GlobalOutlined,
  BarChartOutlined,
  LockOutlined,
  MoneyCollectOutlined,
  SwapOutlined,
  AccountBookOutlined,
  BookOutlined,
  SolutionOutlined,
  FileTextOutlined,
  SecurityScanOutlined,
  LineChartOutlined,
  SafetyOutlined,
  AppstoreOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import { MenuData } from "../../layout";

// Simulated backend menu data
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
      label: "Transactions",
      icon: <CreditCardOutlined />,
      children: [
        {
          key: "2-1",
          label: "Payments",
          icon: <MoneyCollectOutlined />,
          isLocked: true,
        },
        { key: "2-2", label: "Transfers", icon: <SwapOutlined /> },
      ],
    },
    {
      key: "3",
      label: "Accounts",
      icon: <UserOutlined />,
      children: [
        { key: "3-1", label: "Savings", icon: <AccountBookOutlined /> },
        {
          key: "3-2",
          label: "Loans",
          icon: <FileTextOutlined />,
          isLocked: true,
        },
      ],
    },
    {
      key: "4",
      label: "Reports",
      icon: <BarChartOutlined />,
      children: [
        { key: "4-1", label: "Daily Report", icon: <BookOutlined /> },
        { key: "4-2", label: "Monthly Report", icon: <SolutionOutlined /> },
      ],
    },
    {
      key: "5",
      label: "Files",
      icon: <FileOutlined />,
      children: [
        { key: "5-1", label: "Documents", icon: <FileTextOutlined /> },
        { key: "5-2", label: "Media", icon: <AppstoreOutlined /> },
      ],
    },
    {
      key: "6",
      label: "Banking",
      icon: <BankOutlined />,
      children: [
        { key: "6-1", label: "Account Summary", icon: <AccountBookOutlined /> },
        { key: "6-2", label: "Manage Cards", icon: <CreditCardOutlined /> },
      ],
    },
    {
      key: "7",
      label: "Investments",
      icon: <FundOutlined />,
      children: [
        { key: "7-1", label: "Portfolio", icon: <LineChartOutlined /> },
        {
          key: "7-2",
          label: "Performance",
          icon: <BarChartOutlined />,
          isLocked: true,
        },
      ],
    },
    {
      key: "8",
      label: "Settings",
      icon: <SettingOutlined />,
      isLocked: true,
      children: [
        { key: "8-1", label: "Profile Settings", icon: <UserOutlined /> },
        { key: "8-2", label: "Security", icon: <SecurityScanOutlined /> },
      ],
    },
    {
      key: "9",
      label: "E-commerce",
      icon: <ShoppingOutlined />,
      children: [
        { key: "9-1", label: "Orders", icon: <FileOutlined /> },
        { key: "9-2", label: "Products", icon: <AppstoreOutlined /> },
      ],
    },
    {
      key: "10",
      label: "Notifications",
      icon: <BellOutlined />,
      children: [
        { key: "10-1", label: "Alerts", icon: <AlertOutlined /> },
        { key: "10-2", label: "Messages", icon: <SolutionOutlined /> },
      ],
    },
    {
      key: "11",
      label: "Wallet",
      icon: <WalletOutlined />,
      children: [
        { key: "11-1", label: "Top-Up", icon: <MoneyCollectOutlined /> },
        { key: "11-2", label: "Withdrawals", icon: <SwapOutlined /> },
      ],
    },
    {
      key: "12",
      label: "Global",
      icon: <GlobalOutlined />,
      children: [
        { key: "12-1", label: "Currencies", icon: <FundOutlined /> },
        { key: "12-2", label: "Exchange Rates", icon: <LineChartOutlined /> },
      ],
    },
    {
      key: "13",
      label: "Teams",
      icon: <TeamOutlined />,
      children: [
        { key: "13-1", label: "Team 1", icon: <UserOutlined /> },
        { key: "13-2", label: "Team 2", icon: <UserOutlined /> },
      ],
    },
    {
      key: "14",
      label: "Analytics",
      icon: <PieChartOutlined />,
      children: [
        { key: "14-1", label: "Sales Analysis", icon: <BarChartOutlined /> },
        { key: "14-2", label: "User Analytics", icon: <LineChartOutlined /> },
      ],
    },
    {
      key: "15",
      label: "Security",
      icon: <LockOutlined />,
      children: [
        { key: "15-1", label: "Access Control", icon: <SafetyOutlined /> },
        { key: "15-2", label: "Audit Logs", icon: <SecurityScanOutlined /> },
      ],
    },
  ];
};

export default fetchMenuData;
