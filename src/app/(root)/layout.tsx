"use client";
import HeaderComp from "@/components/common/HeaderComp";
import { LockOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Divider, Input, Layout, Menu, theme } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import fetchMenuData from "./utils/fetch/fetchMenuData";

const { Search } = Input;

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

export interface MenuData {
  key: string;
  label: string;
  icon: React.ReactNode;
  children?: MenuData[];
  isLocked?: boolean; // Adding isLocked to handle permission lock
}

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

// Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

  const {
    token: { colorBgContainer, borderRadiusLG, colorBgLayout },
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
    <main>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsible={false}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            background: colorBgContainer,
            maxHeight: "100vh",
            overflowY: "auto",
            scrollbarWidth: "thin",
          }}
          width={300}
        >
          <div
            style={{
              background: colorBgContainer,
            }}
            // className="sticky top-0"
          >
            <div
              style={{
                background: colorBgContainer,
                minHeight: 100,
                zIndex: 999,
              }}
              className="flex justify-center items-center p-2"
            >
              <Image
                alt="logo"
                src={"/assets/logo/DOER_Logo.png"}
                height={150}
                width={150}
              />
            </div>
            <Search
              placeholder="Search menus"
              //   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              //     handleSearch(e.target.value);
              //   }}
              onSearch={handleSearch}
              allowClear
              style={{ marginBottom: 16, padding: "8px 16px", zIndex: 99 }}
            />
          </div>
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={filteredItems}
          />
        </Sider>
        <Layout>
          {/* Header */}
          <HeaderComp />

          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                minHeight: "100%",
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </main>
  );
}
