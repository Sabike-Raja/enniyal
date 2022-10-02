import React, { useState } from "react";
import { Table } from "antd";

import Select from "antd/lib/select";
import { Switch } from "antd";
import { DatePicker } from "antd";
import moment from "moment";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const TakeAttadance = () => {
  const columns = [
    {
      title: "S.no",
      dataIndex: "s_no",
      key: "s_no",
    },
    {
      title: "Employee Name",
      dataIndex: "employee_name",
      key: "employee_name",
    },
    {
      title: "Employee ID",
      dataIndex: "employee_id",
      key: "employee_id",
    },
    {
      title: "Reason",
      key: "reason",
      dataIndex: "reason",
      render: (text) => (
        <div style={{ width: "100px" }}>
          <Select>
            <Select.Option value="Square Feet">Leave</Select.Option>
            <Select.Option value="Square Meter">LOP</Select.Option>
          </Select>
        </div>
      ),
    },

    {
      title: "Reasoning",
      dataIndex: "reasoning",
      key: "reasoning",
      render: (text) => (
        <div>
          <textarea></textarea>
        </div>
      ),
    },
    {
      title: "Attandance All Present",
      dataIndex: "all_present",
      key: "all_present",
      render: (text) => (
        <div>
          <Switch onChange={onChange} />
        </div>
      ),
    },
  ];
  const data = [
    {
      s_no: "1",
      employee_name: "vijay",
      employee_id: "RE002",
      reason: "Leave",
    },
  ];

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="bodytable">
      <h1 className="page-name">Take Attadance</h1>
      <DatePicker
        defaultValue={moment("21/09/2022", dateFormatList[0])}
        format={dateFormatList}
      />
      <Table rowKey="s_no" columns={columns} dataSource={data} />
    </div>
  );
};

export default TakeAttadance;
