import { Col, Input, Row, Typography } from "antd";
import { Button, Modal, Select, Upload } from "antd";
import React, { useState } from "react";
import { Form } from "antd";
import "./style.scss";
import logo from "../../images/logo.svg";
import TextArea from "antd/lib/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";

const Settings = () => {
  const { Option } = Select;
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const { Title } = Typography;

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="bodytable">
      <h1 className="page-name">Settings</h1>
      <div className="settings-warp">
        <Row className="bg-clr">
          <Col span={16}>
            <Title>RIOT INFOMEDIA</Title>
          </Col>
          <Col span={8}>
            <img src={logo} width="100%" height="50" />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Title level={3}>Contact details</Title>
            <Row>
              <Col span={12}>
                <div className="contact-section">
                  <i className="riot-icon riot-icon-mobile" />
                  <span>044 4332 9000</span>
                </div>
              </Col>
              <Col span={12}>
                <div className="contact-section">
                  <i className="riot-icon riot-icon-mobile" />
                  <span>+91 9952996240</span>
                </div>
              </Col>
              <Col span={12}>
                <div className="contact-section">
                  <i className="riot-icon riot-icon-email" />
                  <span>info@riotsolution</span>
                </div>
              </Col>
              <Col span={12}>
                <div className="contact-section">
                  <i className="riot-icon riot-icon-site" />
                  <span>www.riotsolution.com</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col span={14}>
            <Title level={3}>Registration</Title>
            <div className="settings_box_shadow">
              <Title level={5}>GST</Title>
              <p>CJPEK145789</p>
              <Title level={5}>CIN</Title>
              <p>CJPEK145789</p>
            </div>
          </Col>
          <Col span={10}>
            <Title level={3}>Currency</Title>
            <div className="settings_box_shadow min-height">
              <p className="currency-type">indian rupee</p>
              <p className="currency-type">dalor</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={14}>
            <Title level={3}>Address</Title>
            <div className="settings_box_shadow min-height d-flex">
              <i class="riot-icon riot-icon-location"></i>
              <p>
                263 anna main road, mgr nagar, <br></br> chennai- 600027,
                tamilnadu, india
              </p>
            </div>
          </Col>
          <Col span={10}>
            <Title level={3}>Income Terms</Title>
            <div className="settings_box_shadow min-height"></div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Title level={3}>Notes</Title>
            <div className="settings_box_shadow min-height">
              <p>please make the payment to the below account</p>
              <p>Account name : RIOTINFOMEDIA</p>
              <p>Account Number : 2922020000876, IFSC Code : IOBA0009652</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ textAlign: "end", marginLeft: "-10px" }}>
            <Button type="primary" onClick={showModal}>
              Edit
            </Button>
          </Col>
        </Row>
      </div>
      <>
        <Modal
          title="Setting Profile Edit"
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="setting-form">
            <Form>
              <Row>
                <Col span={8}>
                  <p>Company Name</p>
                </Col>
                <Col span={16}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <p>Company Logo</p>
                </Col>
                <Col span={16}>
                  <Form.Item
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload name="logo" listType="picture">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <p>Mobile Number</p>
                </Col>
                <Col span={16}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <p>Phone Number</p>
                </Col>
                <Col span={16}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <p>Email</p>
                </Col>
                <Col span={16}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <p>Website Address</p>
                </Col>
                <Col span={16}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <p>GST Number</p>
                </Col>
                <Col span={16}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <p>Mobile Number</p>
                </Col>
                <Col span={16}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <p>CIN Number</p>
                </Col>
                <Col span={16}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>Currency</Col>
                <Col span={16}>
                  <Form.Item>
                    <Select placeholder="select a country currency">
                      <Option value="rupee">Rupee</Option>
                      <Option value="dolor">Dolar</Option>
                      <Option value="thinar">Thinar</Option>
                      <Option value="euro">Euro</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <p>Address</p>
                </Col>
                <Col span={16}>
                  <Form.Item>
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <p>Notes</p>
                </Col>
                <Col span={16}>
                  <Form.Item>
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default Settings;
