import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Divider, Layout, Menu, Radio } from "antd";
import Style from "./index.module.less";
import React, { memo, useEffect, useState } from "react";
import {
  DashboardOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { ItemType } from "antd/lib/menu/hooks/useItems";

function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false); // 菜单是否收起
  const [selectedKeys, setSelectedKeys] = useState(""); // 菜单选中的key值
  const [menuList, setMenuList] = useState<ItemType[]>([]); // 菜单列表数据

  useEffect(() => {
    // mock菜单数据,一般从接口拿
    setMenuList([
      {
        label: "Home",
        key: "/home",
        icon: <DashboardOutlined />,
      },
      {
        label: "List",
        key: "/list",
        icon: <ShopOutlined />,
      },
    ]);
  }, []);

  useEffect(() => {
    setSelectedKeys(location.pathname);
  }, [location]);
  const renderMenu = () => {
    return (
      <div className={Style.menuwrap}>
        <div className={Style.menuTitle}>admin</div>
        <div className={Style.menu}>
          <Menu
            onClick={(e: any) => {
              navigate(e.key);
            }}
            items={menuList}
            style={{ width: collapsed ? 50 : 220 }}
            selectedKeys={[selectedKeys]}
            theme="dark"
            mode="inline"
            inlineCollapsed={collapsed}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={Style["layout-container"]}>
      <div className={Style["layout-content"]}>
        {renderMenu()}
        <div className={Style.children}>
            <Outlet />
        </div>
      </div>
    </div>
  );
}

export default memo(Index);
