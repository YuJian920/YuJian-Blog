import { Button, Card, Group, Input, SimpleGrid } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  useArticleAdd,
  useArticleEdit,
  useArticleInfo,
} from "../../../hook/useArticle";

const defaultFormData = {
  content: "",
  cover_url: "",
  description: "",
  id: "",
  tips: "",
  title: "",
};

const ArticleEdit = () => {
  const { data: articleInfo, isLoading: pullLoading } = useArticleInfo();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // 编辑数据初始化
  const form = useForm({ initialValues: defaultFormData });
  const [mdValue, setMdValue] = useState<string>(defaultFormData.content);

  const articleId = searchParams.get("articleId");
  const useMutate = articleId ? useArticleEdit : useArticleAdd;
  const { mutateAsync, isLoading } = useMutate();

  useEffect(() => {
    if (articleInfo) {
      form.setValues(articleInfo);
      setMdValue(articleInfo?.content || "");
    }
  }, [articleInfo]);

  useEffect(() => {
    if (!articleId) {
      form.reset();
      setMdValue("");
    }
  }, [articleId]);

  /**
   * 表单提交操作
   */
  const _onFinish = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {
      ...form.values,
      content: mdValue,
      author: "1",
    };

    try {
      // @ts-ignore
      await mutateAsync(params);

      form.reset();
      setMdValue("");
      navigate("/Blog/ArticleList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <form onSubmit={(e) => _onFinish(e)}>
        <SimpleGrid cols={1} spacing="sm">
          <Input
            required
            placeholder="请输入文章标题"
            {...form.getInputProps("title")}
          />
          <Input
            required
            placeholder="请输入文章描述"
            {...form.getInputProps("description")}
          />
          <Input
            required
            placeholder="请输入文章图片URL"
            {...form.getInputProps("cover_url")}
          />
          <MdEditor
            style={{ height: "500px" }}
            value={mdValue}
            renderHTML={(text) => <ReactMarkdown children={text} />}
            onChange={({ text }) => setMdValue(text)}
          />
          <Input placeholder="提示文字" {...form.getInputProps("tips")} />
        </SimpleGrid>
        <Group position="right" mt="md">
          <Button type="submit">提交</Button>
        </Group>
      </form>
    </Card>
  );
};

export default ArticleEdit;
