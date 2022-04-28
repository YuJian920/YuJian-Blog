import { CloseOutlined, HomeOutlined } from "@ant-design/icons";
import { useTabs } from "../../../../context/TabContext";
import "./index.less";

const PageTab = () => {
  const { tabList, activeTab, switchTab, closeTab } = useTabs();

  /**
   * 关闭 Tab
   * @param e
   * @param path
   */
  const closeTabFactory = (e: React.MouseEvent, path: string) => {
    e.stopPropagation();
    closeTab(path);
  };

  return (
    <div className="pageTab">
      {tabList.map((mapItem, index) => (
        <div
          className={
            mapItem.path === activeTab
              ? "pageTab__item pageTab__activeItem"
              : "pageTab__item"
          }
          onClick={() => switchTab(mapItem.path + mapItem.search)}
          key={index}
        >
          {/* <span className="pageTab__item-reIcon">
            {mapItem.path === activeTab ? <SyncOutlined /> : null}
          </span> */}
          <span className="pageTab__item-text">{mapItem.name}</span>
          <span
            className="pageTab__item-closeIcon"
            onClick={(event) => closeTabFactory(event, mapItem.path)}
          >
            {mapItem.path === "/" ? <HomeOutlined /> : <CloseOutlined />}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PageTab;
