import "./style.scss";
import moment from "moment";
import { Input, Select, Menu, Dropdown } from "antd";
import { Col, Row } from "antd";
import Button from "antd/lib/button";
import { DatePicker } from "antd";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import React, { useState } from "react";

const Profile = () => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const { Option } = Select;
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onChangedate = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="bodytable">
      <h1 className="page-name">Profile</h1>

      <div className="profile_form">
        <div className="bg-green"></div>
        <div className="form-center">
          <div className="profile-drop">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <Row>
            <Col span={6}>
              <p>Name</p>
            </Col>
            <Col span={18}>
              <Input placeholder="" />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <p>Gender</p>
            </Col>
            <Col span={18}>
              <Select
                style={{ width: "100%" }}
                showSearch
                placeholder="Select"
                onChange={onChange}
                onSearch={onSearch}
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <p>Date of Birth</p>
            </Col>
            <Col span={18}>
              <DatePicker
                style={{ width: "100%" }}
                placeholder="dd-mm-yyyy"
                onChange={onChangedate}
                format={dateFormatList}
              />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <p>Employee Id</p>
            </Col>
            <Col span={18}>
              <Input placeholder="" />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <p>Designation</p>
            </Col>
            <Col span={18}>
              <Select
                style={{ width: "100%" }}
                showSearch
                placeholder="Select"
                onChange={onChange}
                onSearch={onSearch}
              >
                <Option value="manager">Manger</Option>
                <Option value="tl">TL</Option>
                <Option value="hr">HR</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <p>Email Address</p>
            </Col>
            <Col span={18}>
              <Input placeholder="" />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <p>Contact Number</p>
            </Col>
            <Col span={18}>
              <Input placeholder="" />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <p>Date of Joining</p>
            </Col>
            <Col span={18}>
              <DatePicker
                style={{ width: "100%" }}
                placeholder="dd-mm-yyyy"
                onChange={onChangedate}
                format={dateFormatList}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: "center", marginTop: "20px" }}>
              <Button type="primary">Submit</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Profile;
