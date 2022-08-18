import { Card, Table } from "@mantine/core";
import TableButton from "./components/TableButton";
import TableSkeleton from "./components/TableSkeleton";
import useArticleListLogic from "./hooks/useArticleListLogic";
import type { ArticleListIocPropsType } from "./type";

const ArticleList = () => (
  <ArticleListIoc>
    <thead>
      <tr>
        <th>文章标题</th>
        <th>描述</th>
        <th style={{ textAlign: "center" }}>创建时间</th>
        <th style={{ textAlign: "center" }}>操作</th>
      </tr>
    </thead>
  </ArticleListIoc>
);

const ArticleListIoc = ({ children }: ArticleListIocPropsType) => {
  const { isLoading } = useArticleListLogic();

  return (
    <Card>
      <Table>
        {children}
        <tbody>
          {isLoading ? <TableSkeleton row={6} col={4} /> : <TableButton />}
        </tbody>
      </Table>
    </Card>
  );
};

export default ArticleList;
