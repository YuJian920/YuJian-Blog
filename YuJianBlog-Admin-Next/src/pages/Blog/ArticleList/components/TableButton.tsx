import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useArticleListLogic from "../hooks/useArticleListLogic";
import useArticleListStyles from "../style";

const TableButton = () => {
  const { articleList, deleteMutate } = useArticleListLogic();
  const { classes } = useArticleListStyles();
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
    await deleteMutate(articleId);
  };

  return (
    <>
      {articleList?.map((mapItem) => (
        <tr key={mapItem.id}>
          <td>{mapItem.title}</td>
          <td>{mapItem.description}</td>
          <td className={classes.centerChild}>{mapItem.createdAt}</td>
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
      ))}
    </>
  );
};

export default TableButton;
