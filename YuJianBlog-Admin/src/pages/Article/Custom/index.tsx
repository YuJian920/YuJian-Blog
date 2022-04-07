import { Button, Form, Input } from "antd";
import "./index.less";

const Custom = () => {
  return (
    <div className="blogCustom">
      <Form style={{ width: "80%" }}>
        <Form.Item label="首页文字">
          <Input placeholder="请输入首页文字" />
        </Form.Item>
        <Form.Item label="页脚文字">
          <Input.TextArea placeholder="请输入页脚文字" />
        </Form.Item>
        <Form.Item style={{ textAlign: "right", marginTop: 20 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Custom;
