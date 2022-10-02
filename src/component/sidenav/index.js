import {
  AppstoreOutlined,
  UserOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  FileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import AppRoutes from "constant/appRoutes";
import "./style.scss";

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
  getItem(
    <Link to={AppRoutes.dashboard}>Dashboard</Link>,
    "Dashboard",
    <i className="riot-icon riot-icon-menu" />
  ),
  getItem(
    "Invoice",
    "Invoice",
    <i className="riot-icon riot-icon-invoices" />,
    [
      getItem(
        <Link to={AppRoutes.createproformainvoice}>
          Create Proforma Invoice
        </Link>,
        "CreateProformaInvoice"
      ),
      getItem(
        <Link to={AppRoutes.createpayinvoice}>Create Pay Invoice</Link>,
        "CreatePayInvoice"
      ),
      getItem(
        <Link to={AppRoutes.viewproformainvoice}>View Proforma Invoice</Link>,
        "ViewProformaInvoice"
      ),
      getItem(
        <Link to={AppRoutes.viewpayinvoice}>View Pay Invoice</Link>,
        "ViewPayInvoice"
      ),
      getItem(
        <Link to={AppRoutes.viewinvoice}>View Invoice</Link>,
        "ViewInvoice"
      ),
    ]
  ),

  getItem(
    "Address",
    "Address",
    <i className="riot-icon riot-icon-location" />,
    [
      getItem(<Link to={AppRoutes.client}>Client</Link>, "Client"),
      getItem(<Link to={AppRoutes.vendor}>Vendor</Link>, "Vendors"),
    ]
  ),

  getItem(
    "Employee",
    "Employee",
    <i className="riot-icon riot-icon-employee" />,
    [
      getItem(
        <Link to={AppRoutes.viewemployee}>Viewemployee</Link>,
        "Viewemployee"
      ),
      getItem(
        <Link to={AppRoutes.designation}>Designation</Link>,
        "Designation"
      ),
      getItem(<Link to={AppRoutes.employeeid}>Employeeid</Link>, "Employeeid"),
    ]
  ),

  getItem(
    <Link to={AppRoutes.expancess}>Expancess</Link>,
    "Expancess",
    <i className="riot-icon riot-icon-expencess" />
  ),

  getItem(
    <Link to={AppRoutes.payslip}>Pay Slip</Link>,
    "PaySlip",
    <i className="riot-icon riot-icon-expencess" />
  ),
  getItem(
    "Attandance",
    "Attandance",
    <i className="riot-icon riot-icon-attantance" />,
    [
      getItem(
        <Link to={AppRoutes.viewattadance}>View Attandance</Link>,
        "ViewAttandance"
      ),
      getItem(
        <Link to={AppRoutes.takeattadance}>Take Attandance</Link>,
        "TakeAttandance"
      ),
    ]
  ),
  getItem(
    <Link to={AppRoutes.settings}>Settings</Link>,
    "Settings",
    <i className="riot-icon riot-icon-setting" />
  ),
  getItem(
    <Link to={AppRoutes.profile}>Profile</Link>,
    "Profile",
    <SettingOutlined />
  ),
];

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="mainside">
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
        defaultSelectedKeys={[""]}
        defaultOpenKeys={[""]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      ></Menu>
    </div>
  );
};

export default SideNav;
