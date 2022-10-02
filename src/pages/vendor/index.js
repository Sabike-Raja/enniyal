import React, { useState } from "react";
import { Space, Table } from "antd";
import Button from "antd/lib/button";
import { DatePicker } from "antd";
import Modal from "antd/lib/modal";

const Vendor = () => {
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
      title: "Company Name",
      dataIndex: "company_name",
      key: "company_name",
    },
    {
      title: "Contact No",
      dataIndex: "contact_no",
      key: "contact_no",
    },
    {
      title: "GST No",
      dataIndex: "gst_no",
      key: "gst_no",
    },
    {
      title: "Mail ID",
      dataIndex: "mail_id",
      key: "mail_id",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Postal Code",
      dataIndex: "postal_code",
      key: "postal_code",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
          <a
            onClick={() => {
              showModal(true);
            }}
            role="button"
          >
            View
          </a>
          <a>Edit</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      s_no: "1",
      name: "vijay",
      company_name: "riot",
      contact_no: "9952996240",
      gst_no: "1234567890",
      mail_id: "Riot@gmail.com",
      address: "Chennai",
      postal_code: "600028",
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
      <h1 className="page-name">Vendor</h1>
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

export default Vendor;
