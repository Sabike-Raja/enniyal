import React from "react";
import { Input, Menu, Dropdown } from "antd";
import { Col, Row } from "antd";
import Button from "antd/lib/button";
import { DatePicker } from "antd";
import "./style.scss";

const Topbar = () => {
  const { Search } = Input;
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <a rel="noopener noreferrer">Purchase Invoice</a>,
        },
        {
          key: "2",
          label: <a rel="noopener noreferrer">Salary</a>,
        },
        {
          key: "3",
          label: <a rel="noopener noreferrer">Others</a>,
        },
      ]}
    />
  );
  return (
    <div className="topbar">
      <Row>
        <Col span={2}>
          <div className="report text-align-center">Report</div>
        </Col>
        <Col span={21}>
          <Row className="intop">
            <Col span={5}>
              <DatePicker style={{ width: "100%" }} />
            </Col>
            <Col span={5}>
              <DatePicker style={{ width: "100%" }} />
            </Col>
            <Col span={2} className="topnav_btn">
              <Button type="primary">Copy</Button>
            </Col>
            <Col span={2} className="topnav_btn">
              <Button type="primary">Excel</Button>
            </Col>
            <Col span={2} className="topnav_btn">
              <Button type="primary">PDF</Button>
            </Col>
            <Col span={2} className="topnav_btn">
              <Button type="primary">Print</Button>
            </Col>
            <Col span={6}>
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="medium"
                onSearch={Search}
              />
            </Col>
          </Row>
        </Col>

        <Col span={1}>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Button type="primary">+</Button>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default Topbar;
