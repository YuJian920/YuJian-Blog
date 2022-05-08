import { Button, Form, Input, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { useBlogCustom, useBlogCustomMutation } from "../../../hook/useCustom";
import { BlogCustom } from "../../../type";
import "./index.less";

const Custom = () => {
  const { data, isLoading: customLoading } = useBlogCustom();
  const { mutateAsync, isLoading: editCustomLoading } = useBlogCustomMutation();
  const [form] = useForm();
  const customData = data?.data || {};

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(customData[0]);
  }, [customData, form]);

  const onCustomSubmit = async (value: BlogCustom) => {
    await mutateAsync({ ...value, id: 1 });
  };

  return (
    <div className="blogCustom">
      {customLoading ? (
        <Spin size="large" />
      ) : (
        <Form style={{ width: "80%" }} form={form} onFinish={onCustomSubmit}>
          <Form.Item label="首页文字" name="slogan">
            <Input placeholder="请输入首页文字" />
          </Form.Item>
          <Form.Item label="页脚文字" name="footer">
            <Input.TextArea placeholder="请输入页脚文字" />
          </Form.Item>
          <Form.Item style={{ textAlign: "right", marginTop: 20 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={editCustomLoading}
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default Custom;
