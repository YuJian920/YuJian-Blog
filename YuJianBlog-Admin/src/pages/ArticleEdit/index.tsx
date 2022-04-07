import { Button, Form, Input, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Vditor from "vditor";
import "vditor/dist/index.css";
import {
  useArticleAdd,
  useArticleEdit,
  useArticleInfo
} from "../../hook/useArticle";
import { Artcile } from "../../type";
import "./index.less";

const ArticleEdit = () => {
  const { data, isLoading: pullLoading } = useArticleInfo();
  const articleInfo = data?.data || {};
  const useMutate = Object.keys(articleInfo).length
    ? useArticleEdit
    : useArticleAdd;

  const [vditorOb, setVditorOb] = useState<Vditor>();
  const { mutateAsync, isLoading } = useMutate();

  const [form] = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (!pullLoading) {
      const vditor = new Vditor("vditor", {
        after: () => {
          vditor.setValue(articleInfo.content || "");
          setVditorOb(vditor || "");
        },
      });
    }
  }, [data, pullLoading]);

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(articleInfo);
  }, [articleInfo, form]);

  const onFinish = async (value: Artcile) => {
    await mutateAsync({
      ...value,
      content: vditorOb?.getValue() || "",
      author: "1",
      id: articleInfo.id || "",
    });
    form.resetFields();
    navigate("/Article/List");
  };

  return (
    <div className="articleEdit">
      {pullLoading ? (
        <Spin size="large" />
      ) : (
        <Form
          style={{ height: "100%", width: "80%" }}
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[{ required: true, message: "请输入文章描述" }]}
          >
            <Input placeholder="请输入文章描述" />
          </Form.Item>
          <Form.Item name="cover_url">
            <Input placeholder="文章图片URL" />
          </Form.Item>
          <div id="vditor" />
          <Form.Item style={{ textAlign: "right", marginTop: 20 }}>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              提交
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default ArticleEdit;
