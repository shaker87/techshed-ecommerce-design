import React from "react";
import { Button, Card, Col, List, Row, Space, Statistic, Tag } from "antd";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/DashboardLayout";
import { customerSidebarItems, customerStats, customerTasks } from "../siteData";

function CustomerDashboardPage() {
  const user = useSelector((state) => state.auth.user);

  return (
    <DashboardLayout
      area="Customer Area"
      title="Customer Dashboard"
      description="This page is ready for future profile, order history, addresses, support tickets, and saved products."
      user={user}
      navItems={customerSidebarItems}
      primaryAction={
        <Button type="primary" size="large" href="/signin">
          Sign In
        </Button>
      }
      secondaryAction={
        <Button size="large" href="/signup">
          Create Account
        </Button>
      }
    >
      <Row gutter={[16, 16]} className="ant-dashboard-stats">
        {customerStats.map((stat) => (
          <Col xs={24} sm={12} xl={6} key={stat.label}>
            <Card bordered={false} className="ant-dashboard-card">
              <Statistic title={stat.label} value={stat.value} />
              <Tag color="cyan" className="ant-dashboard-tag">
                {stat.note}
              </Tag>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} xl={14}>
          <Card title="Account Features" className="ant-dashboard-card">
            <List
              dataSource={customerTasks}
              renderItem={(task) => <List.Item>{task}</List.Item>}
            />
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card title="Shortcuts" className="ant-dashboard-card">
            <Space size={[8, 8]} wrap>
              {["My Orders", "Wishlist", "Addresses", "Payments", "Reviews", "Support"].map((item) => (
                <Tag color="geekblue" key={item} className="ant-dashboard-tag">
                  {item}
                </Tag>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
}

export default CustomerDashboardPage;
