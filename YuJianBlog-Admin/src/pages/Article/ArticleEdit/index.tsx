import { Button, Form, Input, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  useArticleAdd,
  useArticleEdit,
  useArticleInfo,
} from "../../../hook/useArticle";
import { Artcile } from "../../../type";
import "./index.less";

const ArticleEdit = () => {
  const [mdValue, setMdValue] = useState("");
  const { data, isLoading: pullLoading } = useArticleInfo();
  const [form] = useForm();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // 简化变量
  const articleInfo = data?.data || {};
  // 区分新增还是编辑
  const useMutate = searchParams.get("articleId")
    ? useArticleEdit
    : useArticleAdd;

  const { mutateAsync, isLoading } = useMutate();

  // 初始化表单
  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(articleInfo);
  }, [articleInfo, form]);

  // Markdown Editor 初始化
  useEffect(() => {
    setMdValue(articleInfo.content || "");
  }, [data]);

  /**
   * 提交文章内容
   * @param value
   */
  const onFinish = async (value: Artcile) => {
    await mutateAsync({
      ...value,
      content: mdValue,
      author: "1",
      id: articleInfo.id || "",
    });
    form.resetFields();
    navigate("/Blog/ArticleList");
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
          <MdEditor
            style={{ height: "500px" }}
            value={mdValue}
            renderHTML={(text) => <ReactMarkdown children={text} />}
            onChange={({ text }) => setMdValue(text)}
          />
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
