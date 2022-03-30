import React from "react";
import { Button, Table } from "antd";
import { useArticleList } from "../../hook/useArticle";
import { useUser } from "../../hook/useUser";
import "./index.less";

const ArticleList = () => {
  const { data: articleList, isLoading: articleLoading } = useArticleList();
  const { data: userList, isLoading: userLoading } = useUser();

  return (
    <>
      <Table
        columns={TableConfig(userList?.data)}
        loading={articleLoading && userLoading}
        dataSource={articleList?.data || []}
        rowKey="id"
      />
    </>
  );
};

const TableConfig = (user = []) => {
  return [
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
          <>{user.find((item) => item.id === value)?.username || "已注销"}</>
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
      render: () => {
        return (
          <>
            <Button type="link">编辑</Button>
            <Button type="link">删除</Button>
          </>
        );
      },
      align: "center",
      width: 165,
    },
  ];
};

export default ArticleList;
