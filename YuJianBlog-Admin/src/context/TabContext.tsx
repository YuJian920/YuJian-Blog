import React, {
  ReactNode,
  useState,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routerConfig from "../router";
import { flattenArray } from "../utils";

interface TabList {
  name: string;
  path: string;
  search: string;
}

interface DefaultTabList {
  tabList: TabList[];
  activeTab: string;
  switchTab: (path: TabList["path"], search?: TabList["search"]) => void;
  closeTab: (path: TabList["path"]) => void;
}

const TabContext = React.createContext<DefaultTabList | undefined>(void 0);
TabContext.displayName = "TabContext";

export const useTabs = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabContext");
  }
  return context;
};

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [tabList, setTabList] = useState<TabList[]>([
    { name: "Dashboard", path: "/", search: "" },
  ]);
  const [activeTab, setActiveTab] = useState("");

  // 监听路由变化
  useEffect(() => addTabItem(pathname, search), [pathname, search]);

  // 扁平化路由
  const flattenList = useMemo(() => flattenArray(routerConfig), [routerConfig]);

  /**
   * 添加 Tab
   * @param path
   * @returns
   */
  const addTabItem = (path: TabList["path"], search: TabList["search"]) => {
    if (findTabUtils(path) === -1) {
      const routerIndex = flattenList.findIndex((item) => item.path === path);

      if (routerIndex !== -1) {
        setTabList([
          ...tabList,
          { path, name: flattenList[routerIndex].name, search },
        ]);
      }
    }

    switchTab(path, search);
  };

  /**
   * 切换 Tab
   * @param path
   */
  const switchTab = (path: TabList["path"], search: TabList["search"] = "") => {
    setActiveTab(path);
    navigate(path + search);
  };

  /**
   * 关闭 Tab
   * @param path
   * @returns
   */
  const closeTab = (path: TabList["path"]) => {
    const index = findTabUtils(path);
    if (index === -1 || path === "/") return;
    const newTabList = [...tabList];
    newTabList.splice(index, 1);

    if (path === activeTab) switchTab(newTabList[index - 1].path);
    setTabList(newTabList);
  };

  /**
   * 判断是否已经存在该 Tab
   * @param path
   * @returns
   */
  const findTabUtils = (path: TabList["path"]) => {
    return tabList.findIndex((item) => item.path === path);
  };

  const providerValue = useMemo(
    () => ({ tabList, activeTab, switchTab, closeTab }),
    [tabList, activeTab, routerConfig]
  );

  return <TabContext.Provider value={providerValue} children={children} />;
};
