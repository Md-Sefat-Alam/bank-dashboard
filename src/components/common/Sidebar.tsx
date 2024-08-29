'use client'
import fetchMenuData from "@/app/(root)/utils/fetch/fetchMenuData";
import {
  LockOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, theme } from "antd";
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "react-resizable/css/styles.css";

const { Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

type Props = {};

type MenuItem = Required<MenuProps>["items"][number];

// Function to create a menu item
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  isLocked?: boolean // Pass lock status
): MenuItem {
  return {
    key,
    icon: icon, // Show lock icon if locked
    children,
    label,
    disabled: isLocked, // Disable item if locked
    expandIcon: isLocked && <LockOutlined />,
  } as MenuItem;
}

const Sidebar: React.FC = ({}: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Fetching menu data from the backend (simulated)
  useEffect(() => {
    const loadMenuData = async () => {
      const data = await fetchMenuData();
      const formattedItems = formatMenuItems(data);
      setMenuItems(formattedItems);
      setFilteredItems(formattedItems);
    };
    loadMenuData();
  }, []);

  // Formatting the fetched data into the MenuItem type
  const formatMenuItems = (data: MenuData[]): MenuItem[] =>
    data.map((item) =>
      getItem(
        item.label,
        item.key,
        item.icon,
        item.children ? formatMenuItems(item.children) : undefined,
        item.isLocked
      )
    );

  // Deep search filter function
  const handleSearch = (value: string) => {
    if (!value) {
      setFilteredItems(menuItems);
      return;
    }

    const deepSearch = (items: any[], query: string): MenuItem[] => {
      return items
        .map((item) => {
          const matchedChildren = item?.children
            ? deepSearch(item?.children, query)
            : [];
          const isMatch =
            item.label.toLowerCase().includes(query.toLowerCase()) ||
            matchedChildren.length > 0;

          return isMatch ? { ...item, children: matchedChildren } : null;
        })
        .filter((item) => item !== null); // Type guard to filter non-null values
    };

    const results = deepSearch(menuItems, value);
    setFilteredItems(results);
  };

  return (
    <Sider
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Header className="flex justify-center items-center">
        <Image alt="logo" src={"/favicon.png"} height={50} width={50} />
      </Header>
      <div
        style={{
          padding: "8px 16px",
          position: "sticky",
          top: "0px",
          zIndex: 99,
        }}
      >
        <Search
          placeholder="Search menus"
          //   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //     handleSearch(e.target.value);
          //   }}
          onSearch={handleSearch}
          allowClear
          style={{ marginBottom: 16 }}
        />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={filteredItems}
      />
    </Sider>
  );
};

export default Sidebar;
