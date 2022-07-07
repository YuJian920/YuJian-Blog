import { Button, Card, Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useArticleDelete, useArticleList } from "../../../hook/useArticle";
import { splitTime } from "../../../utils";
import TableSkeleton from "./components/TableSkeleton";
import useArticleListStyles from "./style";

const ArticleList = () => {
  const { classes } = useArticleListStyles();
  const { data: articleList, isLoading: articleLoading } = useArticleList();
  const { mutateAsync } = useArticleDelete();
  const navigate = useNavigate();

  /**
   * 编辑文字
   * @param articleId
   */
  const _onArticleEdit = (articleId: number) => {
    navigate(`/Blog/ArticleEdit?articleId=${articleId}`);
  };

  /**
   * 删除文章
   * @param articleId
   */
  const _onArtcileDelete = async (articleId: number) => {
    await mutateAsync(articleId);
  };

  return (
    <Card>
      <Table>
        <thead>
          <tr>
            <th>文章标题</th>
            <th>描述</th>
            <th style={{ textAlign: "center" }}>创建时间</th>
            <th style={{ textAlign: "center" }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {articleLoading ? (
            <TableSkeleton row={6} col={4} />
          ) : (
            articleList?.map((mapItem) => (
              <tr key={mapItem.id}>
                <td>{mapItem.title}</td>
                <td>{mapItem.description}</td>
                <td className={classes.centerChild}>
                  {splitTime(mapItem.createdAt!)}
                </td>
                <td className={classes.centerChild}>
                  <Button
                    variant="subtle"
                    size="xs"
                    onClick={() => _onArticleEdit(mapItem.id)}
                  >
                    编辑
                  </Button>
                  <Button
                    variant="subtle"
                    size="xs"
                    color="red"
                    onClick={() => _onArtcileDelete(mapItem.id)}
                  >
                    删除
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Card>
  );
};

export default ArticleList;
