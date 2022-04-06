import React from "react";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useArticleList, useArticleDelete } from "../../hook/useArticle";
import { useUser } from "../../hook/useUser";
import "./index.less";

const ArticleList = () => {
  const { data: articleList, isLoading: articleLoading } = useArticleList();
  const { mutateAsync } = useArticleDelete();
  const { data: userList, isLoading: userLoading } = useUser();
  const navigate = useNavigate();

  const onArticleEdit = (articleId: number) => {
    navigate(`/Article/Edit?articleId=${articleId}`);
  };

  const onArtcileDelete = async (articleId: number) => {
    await mutateAsync(articleId);
  };

  return (
    <>
      <Table
        columns={[
          {
            title: "#",
            render: (data, item, index) => <>{index + 1}</>,
            align: "center",
            width: 80,
          },
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
            render: (value, data) => {
              return (
                <>
                  {/* @ts-ignore */}
                  {userList?.data?.find((item) => item.id === value)
                    ?.username || "已注销"}
                </>
              );
            },
            align: "center",
          },
          {
            title: "创建时间",
            dataIndex: "createdAt",
            render: (createdDate, item) => {
              const newCreateTime = createdDate
                .substring(0, createdDate.length - 5)
                .split("T")
                .join(" ");
              return <>{newCreateTime}</>;
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
                  <Button type="link" onClick={() => onArtcileDelete(data.id)}>
                    删除
                  </Button>
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
    </>
  );
};

export default ArticleList;
