import React from 'react';
import { Outlet, Link } from "react-router-dom";
// import { OrderedListOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content } = Layout;

// function getItem(label, key, icon, children, type) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//         type,
//     };
// }
// const items2 = [
//     getItem(<div>Product</div>, 'sub1', <OrderedListOutlined />, [
//         getItem(<Link to={"/add"}>Add Product</Link>, 'g1', null),
//         getItem(<Link to={"/"}>View All Product</Link>, 'g2', null),
//     ]),
// ];

const Layouts = () => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['product']}>
                {/* <Menu.Item key="dashboard">
                        <Image src="logo.png" />
                    </Menu.Item> */}
                    <Menu.Item key="dashboard">
                        <Link to={"/dashboard"}>dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="dash1">
                        <Link to={"/dash1"}>dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="product">
                        <Link to={"/product"}>Product</Link>
                    </Menu.Item>
                    <Menu.Item key="register">
                        <Link to={"/login"}>Login</Link>
                    </Menu.Item>
                    <Menu.Item key="register">
                        <Link to={"/register"}>SignUp</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout>
                {/* <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider> */}
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Product</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Layouts;
