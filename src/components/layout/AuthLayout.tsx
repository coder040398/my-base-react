import { MenuOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import React, { useState } from "react";
import VaultContext from "../../contexts/VaultContext";
import useMenu from "../../hooks/useMenu";

const { Header, Sider, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AuthLayout = (props: Props) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { menu, menuCollapsed } = useMenu();

  return (
    <VaultContext.Provider value={{}}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={300} trigger={null} collapsible collapsed={collapsed}>
          <Header style={{ padding: 0, background: "#1463ad" }}>
            {!collapsed && (
              <span
                style={{
                  color: "#FFF",
                  paddingLeft: 30,
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                Dashboard
              </span>
            )}
          </Header>
          {!collapsed ? menu : menuCollapsed}
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: "#2986dd" }}>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: 35, color: "#FFF" }} />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </VaultContext.Provider>
  );
};

export default AuthLayout;
