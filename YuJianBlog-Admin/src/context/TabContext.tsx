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
}

interface DefaultTabList {
  tabList: TabList[];
  activeTab: string;
  switchTab: (path: TabList["path"]) => void;
  closeTab: (path: TabList["path"]) => void;
}

const TabContext = React.createContext<DefaultTabList | undefined>(void 0);
TabContext.displayName = "TabContext";

const useTabs = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabContext");
  }
  return context;
};

const TabProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [tabList, setTabList] = useState<TabList[]>([
    { name: "Dashboard", path: "/" },
  ]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => addTabItem(pathname), [pathname]);

  /**
   * 添加 Tab
   * @param path
   * @returns
   */
  const addTabItem = (path: TabList["path"]) => {
    if (findTabUtils(path) === -1) {
      const flattenList = flattenArray(routerConfig);
      const routerIndex = flattenList.findIndex((item) => item.path === path);

      if (routerIndex !== -1) {
        setTabList([...tabList, { path, name: flattenList[routerIndex].name }]);
      }
    }

    switchTab(path);
  };

  /**
   * 切换 Tab
   * @param path
   */
  const switchTab = (path: TabList["path"]) => {
    setActiveTab(path);
    navigate(path);
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
    [tabList, activeTab]
  );

  return <TabContext.Provider value={providerValue} children={children} />;
};

export { TabProvider, useTabs };

// export { useTabs };
