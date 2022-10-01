import React,{ useState } from "react";
import { Space, Table } from "antd";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import './expances.scss'

const Expances = () => {
  const columns = [
    {
      title: "S.no",
      dataIndex: "s_no",
      key: "s_no",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title/Invoice",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Pay To",
      key: "pay_to",
      dataIndex: "pay_to",
    },

    {
      title: "Pay For",
      dataIndex: "pay_for",
      key: "pay_for",
    },
    {
      title: "Mode",
      dataIndex: "mode",
      key: "mode",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Last Payment",
      dataIndex: "last_payment",
      key: "last_payment",
    },
    {
      title: "Pending Payment",
      dataIndex: "pending_payment",
      key: "pending_payment",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete {record.name}</a>
          <a>View</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      s_no: "1",
      title: "RM2106097",
      date: "2021-06-07",
      pay_to: "Recam Solutions Pvt Ltd",
      pay_for: "87320",
      mode: "Kasinathan V",
      amount: "Cash",
      last_payment: "80000",
      pending_payment: "7320 / 2021-07-05",
      status: "Pending",
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

  return (
    <div className="expances">
      <h1>Expancess</h1>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {isModalOpen && (
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      )}
      <Table rowKey="s_no" columns={columns} dataSource={data} />
    </div>
  );
};

export default Expances;
