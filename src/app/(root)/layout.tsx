"use client";
import HeaderComp from "@/components/common/HeaderComp";
import { LockOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Input, Layout, Menu, theme } from "antd";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import fetchMenuData from "./utils/fetch/fetchMenuData";

const { Search } = Input;

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

export interface MenuData {
  key: string;
  label: string;
  icon: React.ReactNode;
  children?: MenuData[];
  isLocked?: boolean; // Adding isLocked to handle permission lock
}

// Function to create a menu item with lock status
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  isLocked?: boolean
): MenuItem {
  const labelWithLock =
    isLocked && !children ? (
      <span className="flex justify-between">
        {label}
        <LockOutlined style={{ marginLeft: "8px" }} />
      </span>
    ) : (
      label
    );

  return {
    key,
    icon,
    children,
    label: labelWithLock,
    disabled: isLocked,
    expandIcon:
      isLocked && children ? (
        <LockOutlined style={{ marginRight: "-18px" }} />
      ) : undefined,
  };
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
  const [openKeys, setOpenKeys] = useState<string[]>([]);

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

          // Extract the text content from the label if it's JSX
          const labelText =
            typeof item.label === "string"
              ? item.label
              : item.label.props.children[0] || "";

          const matchIndex = labelText
            .toLowerCase()
            .indexOf(query.toLowerCase());

          // Highlight the matched part
          const highlightedLabel =
            matchIndex >= 0 ? (
              <>
                {labelText.substring(0, matchIndex)}
                <span style={{ color: "#1DA1F2" }}>
                  {labelText.substring(matchIndex, matchIndex + query.length)}
                </span>
                {labelText.substring(matchIndex + query.length)}
                {item.isLocked && !item.children && (
                  <LockOutlined style={{ color: "red" }} />
                )}
              </>
            ) : (
              <>
                {labelText}
                {item.isLocked && !item.children && (
                  <LockOutlined style={{ color: "red" }} />
                )}
              </>
            );

          const isMatch = matchIndex >= 0 || matchedChildren.length > 0;

          // If there's a match, retain all children, not just the matched ones
          return isMatch
            ? {
                ...item,
                label: highlightedLabel, // Update label with highlighted text and lock icon
                children: item.children
                  ? matchedChildren.length
                    ? matchedChildren
                    : item.children
                  : undefined,
              }
            : null;
        })
        .filter((item) => item !== null); // Type guard to filter non-null values
    };

    const results = deepSearch(menuItems, value);
    setFilteredItems(results);
  };

  // Handle the opening and closing of menu items
  const handleOpenChange = (keys: string[]) => {
    if (keys.length && keys[keys.length - 1].split("-").length === 1) {
      setOpenKeys([keys[keys.length - 1]]);
    } else {
      setOpenKeys(keys);
    }
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
          }}
          width={300}
          className="hide-scrollbar relative pt-[100px] lg:pt-[160px]"
        >
          {/* Sticky Header Section */}
          <div
            className="fixed w-[80px] lg:w-[300px] top-0 z-50" // Ensure it's always on top and sticky
            style={{
              background: colorBgContainer,
            }}
          >
            <div
              className="flex justify-center items-center p-2"
              style={{
                background: colorBgContainer,
                minHeight: 100,
              }}
            >
              <Image
                alt="logo"
                src={"/assets/logo/DOER_Logo.png"}
                height={150}
                width={150}
                priority={true}
              />
            </div>
            <Search
              placeholder="Search menus"
              onSearch={handleSearch}
              allowClear
              style={{
                marginBottom: 16,
                padding: "8px 16px",
                zIndex: 50, // Make sure the search bar stays above other elements
                background: colorBgContainer,
              }}
              className="!hidden lg:!block "
            />
          </div>
          {/* Sidebar Menu */}
          <Menu
            mode="inline"
            items={filteredItems}
            openKeys={openKeys}
            onOpenChange={handleOpenChange}
          />
        </Sider>

        <Layout>
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
