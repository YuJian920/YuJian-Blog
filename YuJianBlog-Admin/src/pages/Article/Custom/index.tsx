import { Button, Form, Input, message, Spin } from "antd";
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

  // 初始化表单
  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(customData[0]);
  }, [customData, form]);

  // 提交表单
  const onCustomSubmit = async (value: BlogCustom) => {
    try {
      // @ts-ignore
      const { code, msg } = await mutateAsync({ ...value, id: 1 });

      if (code === 0) message.success("提交成功");
      else message.warning(msg);
    } catch {
      message.error("出现错误");
    }
  };

  return (
    <div className="blogCustom">
      {customLoading ? (
        <Spin size="large" />
      ) : (
        <Form style={{ width: "100%" }} form={form} onFinish={onCustomSubmit}>
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
