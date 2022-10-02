import React, { useState } from "react";
import { Space, Table } from "antd";
import Button from "antd/lib/button";
import { DatePicker } from "antd";
import Modal from "antd/lib/modal";

const Employeeid = () => {
  const columns = [
    {
      title: "S.no",
      dataIndex: "s_no",
      key: "s_no",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Employee ID",
      dataIndex: "employee_id",
      key: "employee_id",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Mobile No",
      key: "mobile_no",
      dataIndex: "mobile_no",
    },

    {
      title: "Mail ID",
      dataIndex: "mail_id",
      key: "mail_id",
    },
    {
      title: "DOJ",
      dataIndex: "doj",
      key: "doj",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete {record.name}</a>
          <a
            onClick={() => {
              showModal(true);
            }}
            role="button"
          >
            View
          </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      s_no: "1",
      name: "vijay",
      employee_id: "riot 002",
      designation: "frontend devloper",
      mobile_no: "9952996240",
      mail_id: "vijay@riotinfomedia.dom",
      doj: "01.04.2021",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen);

  const columnss = [
    {
      title: "Pay for",
      dataIndex: "pay_for",
      key: "pay_for",
    },
    {
      title: "Pay To",
      dataIndex: "pay_to",
      key: "pay_to",
    },
    {
      title: "Total Pay",
      dataIndex: "total_pay",
      key: "total_pay",
    },
    {
      title: "Payed",
      dataIndex: "payed",
      key: "payed",
    },
    {
      title: "Mode",
      dataIndex: "mode",
      key: "mode",
    },
    {
      title: "Pending",
      key: "pending",
      dataIndex: "pending",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
  ];
  const datas = [
    {
      pay_for: "Stationary",
      pay_to: "Krishna story",
      total_pay: "10500",
      payed: "6500",
      mode: "Cash",
      pending: "4000",
      date: "25-06-2022",
    },
  ];

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="bodytable">
      <h1 className="page-name">Employee Id</h1>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
        >
          <Table columns={columnss} dataSource={datas} />
          <div>
            <div className="col-3">
              <span>Amount Pay</span>
              <input
                type="search"
                onkeyup="changing()"
                id="blanceAmt"
                className="form-control rounded"
                placeholder=""
                aria-controls="datatable"
              />
              <span id="extra1" />
            </div>

            <div className="col-3">
              <span>Amount Pay</span>
              <input
                type="search"
                onkeyup="changing()"
                id="blanceAmt"
                className="form-control rounded"
                placeholder=""
                aria-controls="datatable"
              />
              <span id="extra1" />
            </div>

            <div className="col-3">
              <span>Amount Pay</span>
              <input
                type="search"
                onkeyup="changing()"
                id="blanceAmt"
                className="form-control rounded"
                placeholder=""
                aria-controls="datatable"
              />
              <span id="extra1" />
            </div>

            <div className="col-3">
              <span>Amount Pay</span>
              <DatePicker onChange={onChange} />
            </div>
          </div>
        </Modal>
      )}
      <Table rowKey="s_no" columns={columns} dataSource={data} />
    </div>
  );
};

export default Employeeid;
