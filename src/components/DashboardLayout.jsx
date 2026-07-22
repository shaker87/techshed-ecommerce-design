import React from "react";
import {
  BellOutlined,
  CreditCardOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  HomeOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProductOutlined,
  SearchOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Input, Layout, Menu, Space, Typography } from "antd";
import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const iconMap = {
  home: <HomeOutlined />,
  orders: <ShoppingCartOutlined />,
  products: <ProductOutlined />,
  customers: <TeamOutlined />,
  reports: <LineChartOutlined />,
  settings: <SettingOutlined />,
  wishlist: <HeartOutlined />,
  addresses: <EnvironmentOutlined />,
  payments: <CreditCardOutlined />,
  account: <UserOutlined />,
  shopping: <ShoppingOutlined />,
};

const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

function DashboardLayout({
  area,
  title,
  description,
  user,
  primaryAction,
  secondaryAction,
  navItems,
  children,
}) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = useMemo(
    () =>
      navItems.map((item) => ({
        key: item.to,
        icon: iconMap[item.icon] || <HomeOutlined />,
        label: item.label,
      })),
    [navItems]
  );

  return (
    <section className="section shell">
      <Layout className="ant-dashboard-shell">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          breakpoint="lg"
          className="ant-dashboard-sider"
          width={270}
          trigger={null}
        >
          <div className="ant-dashboard-brand">
            <Link to="/">TechShed</Link>
            <span>{area}</span>
          </div>

          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={({ key }) => navigate(key)}
            className="ant-dashboard-menu"
          />
        </Sider>

        <Layout className="ant-dashboard-main">
          <Header className="ant-dashboard-topbar">
            <Space size="middle" className="ant-dashboard-topbar-left">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed((current) => !current)}
                className="ant-dashboard-trigger"
              />
              <Input
                size="large"
                prefix={<SearchOutlined />}
                placeholder="Search dashboard..."
                className="ant-dashboard-search"
              />
            </Space>

            <Space size="middle">
              <Badge count={3} size="small">
                <Button shape="circle" icon={<BellOutlined />} />
              </Badge>
              <div className="ant-dashboard-profile">
                <Avatar icon={<UserOutlined />} />
                <div>
                  <Text strong>{user?.name || "Guest User"}</Text>
                  <Text type="secondary">{user?.email || "Not signed in"}</Text>
                </div>
              </div>
            </Space>
          </Header>

          <Content className="ant-dashboard-content">
            <div className="dashboard-header">
              <div>
                <p className="eyebrow">{area}</p>
                <Title level={2}>{title}</Title>
                <Paragraph className="dashboard-intro">{description}</Paragraph>
                {user && <p className="dashboard-user">Signed in as {user.email}</p>}
              </div>
              <div className="dashboard-actions">
                {primaryAction}
                {secondaryAction}
              </div>
            </div>

            {children}
          </Content>
        </Layout>
      </Layout>
    </section>
  );
}

export default DashboardLayout;
