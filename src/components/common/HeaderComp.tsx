import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Layout, Popover, theme } from "antd";
import Search from "antd/es/input/Search";
import Notification from "../Header/Notification";
import UserCard from "../Header/UserCard";
import ThemeSwitcher from "./ThemeSwitcher";
const { Header } = Layout;

type Props = {};

export default function HeaderComp({}: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      className="flex items-center justify-between"
      style={{ padding: 0, background: colorBgContainer }}
    >
      <div className="flex justify-center items-center gap-4 pl-4">
        {/* <MenuOutlined /> */}
        <Search placeholder="Search menus" onSearch={() => {}} allowClear />
      </div>
      <div className="flex justify-center items-center gap-6 pr-4">
        <ThemeSwitcher />

        <Popover title={false} content={<Notification />} trigger="click">
          <Badge count={5}>
            <BellOutlined style={{ color: "red" }} className="text-xl p-1 cursor-pointer" />
          </Badge>
        </Popover>

        <Popover title={false} content={<UserCard />} trigger="click">
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
            className="cursor-pointer"
          />
        </Popover>
      </div>
    </Header>
  );
}
