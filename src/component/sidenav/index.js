import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

import AppRoutes from 'constant/appRoutes'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem( <Link to={AppRoutes.dashboard}>Dashboard</Link>, "Dashboard", <HomeOutlined />),
  getItem("Invoice", "Invoice", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
  ]),

  getItem("Address", "Address", <MailOutlined />, [
    getItem("Option 4", "5"),
    getItem("Option 5", "6"),
    getItem("Option 6", "7"),
    getItem("Option 7", "8"),
  ]),

  getItem("Employee", "Employee", <MailOutlined />, [
    getItem("Option 8", "4"),
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
  ]),

  getItem(<Link to={AppRoutes.expancess}>Expancess</Link>, "Expancess", <DesktopOutlined />),

  getItem(<Link to={AppRoutes.expancess}>Pay Slip</Link>, "Pay Slip", <DesktopOutlined />),
  getItem("Attandance", "sub4", <MailOutlined />, [
    getItem("Option 12", "12"),
    getItem("Option 13", "13"),
    getItem("Option 14", "14"),
    getItem("Option 15", "15"),
  ]),
  // getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
  //   getItem("Option 9", "9"),
  //   getItem("Option 10", "10"),
  //   getItem("Submenu", "sub3", null, [
  //     getItem("Option 11", "11"),
  //     getItem("Option 12", "12"),
  //   ]),
  // ]),
  getItem(<Link to={AppRoutes.expancess}>Settings</Link>, "Settings", <DesktopOutlined />),
];

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      >
        </Menu>
    </div>
  );
};

export default SideNav