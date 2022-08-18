import {
  Button,
  Card,
  Group,
  SimpleGrid,
  Textarea,
  TextInput,
} from "@mantine/core";
import SpinnerHoc from "../../../components/Spinner";
import useBlogCustomLogic from "./hooks/useBlogCustomLogic";
import type { BlogCustomIocPropsType } from "./type";

const BlogCustom = () => {
  const { customMutateAsync, isLoading, customForm } = useBlogCustomLogic();
  return (
    <SpinnerHoc loading={isLoading}>
      <BlogCustomIoc mutateAsync={customMutateAsync} customForm={customForm}>
        <Group position="right" mt="md">
          <Button type="submit">提交</Button>
        </Group>
      </BlogCustomIoc>
    </SpinnerHoc>
  );
};

const BlogCustomIoc = ({
  mutateAsync,
  customForm,
  children,
}: BlogCustomIocPropsType) => {
  /**
   * 提交表单
   */
  const _onCustomSubmit = async () => {
    try {
      await mutateAsync({ ...customForm.values, id: 1 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <form onSubmit={_onCustomSubmit}>
        <SimpleGrid cols={1} spacing="sm">
          <TextInput
            label="首页文字"
            placeholder="请输入首页文字"
            {...customForm.getInputProps("slogan")}
          />
          <Textarea
            label="页脚文字"
            placeholder="请输入页脚文字"
            {...customForm.getInputProps("footer")}
          />
        </SimpleGrid>
        {children}
      </form>
    </Card>
  );
};

export default BlogCustom;
