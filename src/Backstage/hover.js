import React,{Component} from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';


class hover extends Component {
    constructor(props) {
        super(props)
    }
    

    render(){
        const { SubMenu } = Menu;
        const { Header, Content, Footer, Sider } = Layout;
        
        return(
            <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>列表</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <Icon type="user" />
                            用户管理
                            </span>
                        }
                        >
                        <Menu.Item key="1">用户列表</Menu.Item>
                        <Menu.Item key="2">添加用户</Menu.Item>
                        </SubMenu>
                        <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="laptop" />
                            书架管理
                            </span>
                        }
                        >
                        <Menu.Item key="5">书架列表</Menu.Item>
                        <Menu.Item key="6">添加漫画</Menu.Item>
                        <Menu.Item key="7">删除漫画</Menu.Item>
                        <Menu.Item key="8">漫画分类</Menu.Item>
                        </SubMenu>
                        <SubMenu
                        key="sub3"
                        title={
                            <span>
                            <Icon type="notification" />
                            反馈信息
                            </span>
                        }
                        >
                        <Menu.Item key="9">反馈列表</Menu.Item>
                        </SubMenu>
                    </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        );
    }
}
export default hover;