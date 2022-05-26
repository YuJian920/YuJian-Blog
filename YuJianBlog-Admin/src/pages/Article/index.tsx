import { Button, Table, Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useArticleList, useArticleDelete } from "../../hook/useArticle";
import { useUser } from "../../hook/useUser";

const ArticleList = () => {
  const { data: articleList, isLoading: articleLoading } = useArticleList();
  const { mutateAsync } = useArticleDelete();
  const { data: userList, isLoading: userLoading } = useUser();
  const navigate = useNavigate();

  const onArticleEdit = (articleId: number) => {
    navigate(`/Blog/ArticleEdit?articleId=${articleId}`);
  };

  const onArtcileDelete = async (articleId: number) => {
    try {
      // @ts-ignore
      const { code, msg } = await mutateAsync(articleId);

      if (code === 0) message.success("删除成功");
      else message.warning(msg);
    } catch {
      message.error("出现错误");
    }
  };

  return (
    <Table
      columns={[
        {
          title: "文章标题",
          dataIndex: "title",
          align: "center",
        },
        {
          title: "描述",
          dataIndex: "description",
          align: "center",
        },
        {
          title: "作者",
          dataIndex: "author",
          render: (value) => {
            return (
              userList?.data?.find((item) => item.id === value)?.username ||
              "已注销"
            );
          },
          align: "center",
        },
        {
          title: "创建时间",
          dataIndex: "createdAt",
          render: (createdDate, item) => {
            return createdDate
              .substring(0, createdDate.length - 5)
              .split("T")
              .join(" ");
          },
          align: "center",
        },
        {
          title: "操作",
          render: (value, data) => {
            return (
              <>
                <Button type="link" onClick={() => onArticleEdit(data.id)}>
                  编辑
                </Button>
                <Popconfirm
                  title="确定删除这篇文章吗？"
                  onConfirm={() => onArtcileDelete(data.id)}
                  okText="确认"
                  cancelText="取消"
                >
                  <Button type="link">删除</Button>
                </Popconfirm>
              </>
            );
          },
          align: "center",
          width: 165,
        },
      ]}
      loading={articleLoading || userLoading}
      dataSource={articleList?.data || []}
      rowKey="id"
    />
  );
};

export default ArticleList;
