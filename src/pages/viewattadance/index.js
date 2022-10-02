import React, { useState } from "react";
import { Space, Table, Row, Col } from "antd";
import Button from "antd/lib/button";
import { DatePicker } from "antd";
import Modal from "antd/lib/modal";
import "./style.scss";
import moment from "moment";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const ViewAttadance = () => {
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
      title: "Present/Total",
      key: "present_total",
      dataIndex: "present_total",
    },

    {
      title: "Sunday",
      dataIndex: "sunday",
      key: "sunday",
      render: (text) => (
        <div>
          <span className="holiday" />
        </div>
      ),
    },
    {
      title: "Monday",
      dataIndex: "monday",
      key: "monday",
      render: (text) => (
        <div>
          <span className="lop" />
        </div>
      ),
    },
    {
      title: "Tuesday",
      dataIndex: "tuesday",
      key: "tuesday",
      render: (text) => (
        <div>
          <span className="sick" />
        </div>
      ),
    },
    {
      title: "Wednesday",
      dataIndex: "wednesday",
      key: "wednesday",
      render: (text) => (
        <div>
          <span className="present" />
        </div>
      ),
    },
    {
      title: "Thursday",
      dataIndex: "thursday",
      key: "thursday",
      render: (text) => (
        <div>
          <span className="present" />
        </div>
      ),
    },
    {
      title: "Friday",
      dataIndex: "friday",
      key: "friday",
      render: (text) => (
        <div>
          <span className="present" />
        </div>
      ),
    },
    {
      title: "Saturday",
      dataIndex: "saturday",
      key: "saturday",
      render: (text) => (
        <div>
          <span className="sick" />
        </div>
      ),
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Delete {record.name}</a>
    //       <a onClick={() => {
    //         showModal(true);
    //       }}
    //         role="button"
    //       >View</a>
    //     </Space>
    //   ),
    // },
  ];
  const data = [
    {
      s_no: "1",
      employee_name: "kannan",
      employee_id: "RE001",
      present_total: "24/31",
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
      <h1 className="page-name">View Attadance</h1>

      <Row className="d-flex">
        <Col className="align-item-center">
          <DatePicker
            defaultValue={moment("21/09/2022", dateFormatList[0])}
            format={dateFormatList}
          />
          <Button>1st Week</Button>
          <Button>2nd Week</Button>
          <Button>3rd Week</Button>
          <Button>4th Week</Button>
          <Button>5th Week</Button>
        </Col>
      </Row>

      <div className="d-flex">
        <h3 style={{ marginRight: "30px" }}>
          <span className="holiday"></span>Holiday
        </h3>
        <h3 style={{ marginRight: "30px" }}>
          <span className="present"></span>Present
        </h3>
        <h3 style={{ marginRight: "30px" }}>
          <span className="lop"></span>LOP
        </h3>
        <h3 style={{ marginRight: "30px" }}>
          <span className="sick"></span>Sick Leave
        </h3>
      </div>

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

export default ViewAttadance;
