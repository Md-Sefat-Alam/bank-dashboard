import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

type Props = {};

export default function UserCard({}: Props) {
  return (
    <div className="min-w-[300px] flex flex-col justify-center gap-4 pb-20 items-center ">
      <Avatar
        style={{
          backgroundColor: "#87d068",
          width: "150px",
          height: "150px",
        }}
        icon={<UserOutlined className="text-4xl" />}
      />
      <h2>abc@abc.com</h2>
      <small>Lorem ipsum dolor sit amet.</small>
    </div>
  );
}
