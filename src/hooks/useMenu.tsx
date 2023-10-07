import {
  DashboardOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export interface SideMenuItem {
  path: string;
  icon: React.JSX.Element;
  title: string;
}

export const menuList: SideMenuItem[] = [
  {
    path: "/",
    icon: <DashboardOutlined />,
    title: "Dashboard",
  },
  {
    path: "/login",
    icon: <UserOutlined />,
    title: "Login",
  },
];

export default function useMenu() {
  let location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  const menu = menuList.map((item: SideMenuItem) => {
    return (
      <Link to={item.path}>
        <div
          style={{ marginTop: 10 }}
          className={
            current === item.path ? "side-menu-item-active" : "side-menu-item"
          }
        >
          <div style={{ paddingLeft: 30 }}>
            <span style={{ marginRight: 10 }}>{item.icon}</span>
            <span>{item.title}</span>
          </div>
          <div style={{ paddingRight: 30 }}>
            <RightOutlined />
          </div>
        </div>
      </Link>
    );
  });

  const menuCollapsed = menuList.map((item: SideMenuItem) => {
    return (
      <Link to={item.path}>
        <div
          style={{ marginTop: 10 }}
          className={
            current === item.path ? "side-menu-item-active" : "side-menu-item"
          }
        >
          <div style={{ paddingLeft: 30 }}>
            <span style={{ marginRight: 10 }}>{item.icon}</span>
          </div>
        </div>
      </Link>
    );
  });

  return { menu, menuCollapsed };
}
