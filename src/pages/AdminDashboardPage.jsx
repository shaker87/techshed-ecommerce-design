import React from "react";
import { Button, Card, Col, List, Row, Space, Statistic, Tag } from "antd";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/DashboardLayout";
import { adminSidebarItems, adminStats, adminTasks } from "../siteData";

function AdminDashboardPage() {
  const user = useSelector((state) => state.auth.user);

  return (
    <DashboardLayout
      area="Admin Area"
      title="Admin Dashboard"
      description="This starter dashboard is ready for future product management, order management, users, analytics, and settings."
      user={user}
      navItems={adminSidebarItems}
      primaryAction={<Button type="primary" size="large">Add Product</Button>}
      secondaryAction={
        <Button size="large" href="/signin">
          Admin Sign In
        </Button>
      }
    >
      <Row gutter={[16, 16]} className="ant-dashboard-stats">
        {adminStats.map((stat) => (
          <Col xs={24} sm={12} xl={6} key={stat.label}>
            <Card bordered={false} className="ant-dashboard-card">
              <Statistic title={stat.label} value={stat.value} />
              <Tag color="purple" className="ant-dashboard-tag">
                {stat.trend} this month
              </Tag>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} xl={14}>
          <Card title="Quick Actions" className="ant-dashboard-card">
            <List
              dataSource={adminTasks}
              renderItem={(task) => <List.Item>{task}</List.Item>}
            />
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card title="Modules To Connect Later" className="ant-dashboard-card">
            <Space size={[8, 8]} wrap>
              {["Orders", "Products", "Customers", "Coupons", "Reports", "Settings"].map((item) => (
                <Tag color="blue" key={item} className="ant-dashboard-tag">
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

export default AdminDashboardPage;
