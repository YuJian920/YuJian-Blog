import {
  Button,
  Card,
  Group,
  TextInput,
  Textarea,
  SimpleGrid,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useBlogCustom, useBlogCustomMutation } from "../../../hook/useCustom";

const BlogCustom = () => {
  const { data, isLoading: customLoading } = useBlogCustom();
  const { mutateAsync, isLoading: editCustomLoading } = useBlogCustomMutation();
  const customForm = useForm({ initialValues: data[0] });

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
        <Group position="right" mt="md">
          <Button type="submit">提交</Button>
        </Group>
      </form>
    </Card>
  );
};

export default BlogCustom;
