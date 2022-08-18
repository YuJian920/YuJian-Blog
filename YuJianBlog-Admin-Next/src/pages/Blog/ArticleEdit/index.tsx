import { Button, Card, Group, Input, SimpleGrid } from "@mantine/core";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerHoc from "../../../components/Spinner";
import MarkDownEditor from "./components/MarkDownEditor";
import useArticleLogic from "./hooks/useArticleLogic";

const ArticleEdit = () => {
  const { mutateAsync, form, isLoading, markDownRef } = useArticleLogic();
  const navigate = useNavigate();

  /**
   * 表单提交操作
   */
  const _onFinish = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = markDownRef.current?.markDownText() || "";
    try {
      await mutateAsync({ ...form.values, content: text, author: "1" });
      navigate("/Blog/ArticleList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SpinnerHoc loading={isLoading}>
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
            <MarkDownEditor
              defaultText={form?.values?.content || ""}
              ref={markDownRef}
            />
            <Input placeholder="提示文字" {...form.getInputProps("tips")} />
          </SimpleGrid>
          <Group position="right" mt="md">
            <Button type="submit">提交</Button>
          </Group>
        </form>
      </Card>
    </SpinnerHoc>
  );
};

export default ArticleEdit;
