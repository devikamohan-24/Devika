import React, { FC } from "react";
import {
  AppstoreOutlined,
  FlagOutlined,
  CrownOutlined,
  FallOutlined,
  TeamOutlined,
  FormOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { Steps } from 'antd';
import { Card, Col, Row } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const title = ["Home", "Profile","My learning","My Assement", "Achivements", "Course Timeline", "Team Members", "Risk Quadrant"];
const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  FormOutlined,
  CrownOutlined,
  FlagOutlined,
  TeamOutlined,
  FallOutlined,
].map((icon, index) => ({
  //key: String(index),
  icon: React.createElement(icon),
  label: `${title[index]}`,
}));

const Dash: React.FC = () => (
  <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header style={{ textAlign: 'center'}}><h1>Dashboard</h1></Header>
      <Content style={{margin: '24px 16px 0', overflow: 'initial',textAlign: 'center',textAlign: 'center' }}><h1>Objective</h1><h4>A React developer is responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front- end JavaScript library. They develop and maintain UIs for web and mobile apps. They must have high- level expertise using React and a deep understanding of all stages of the software development life cycle. They write, test, debug, and implement code to meet user requirements. React developers need to have good communication skills as they work closely with project managers, developers, clients, testers, and web designers to create effective applications. They should have significant experience using JavaScript or Typescript, strong math skills, and a good working knowledge of debugging tools.
        A thorough understanding of React and its core principles is required for a React developer. React developers need the ability to understand business requirements and translate them into technical requirements. Exceptional time management skills and solid interpersonal skills are also essential.</h4>
        <h1></h1>
        <h1></h1>       
        <h1>Activities</h1>
      <div className="site-card-wrapper">
         <Row gutter={16}>
           <Col span={8}>
           <Card title="Discuss UI ideas" bordered={false}>
           Work with the development team to discuss UI ideas.
           Identify web- based user interactions.
           Develop, build, and implement UI components.
           Test codes and UIs prior to site launch
           </Card>
           </Col>
           <Col span={8}>
           <Card title="Monitor front- end performance" bordered={false}>
           Analyzing requirements and designing new functionality.
           Design, build and maintain efficient, reusable, and reliable code.
           Ensure the best possible performance, quality, and responsiveness of applications.
           </Card>
           </Col>
           <Col span={8}>
           <Card title="Identify bottlenecks and bugs," bordered={false}>
           Developing updates and documenting application changes.
           Identify bottlenecks and bugs, and devise solutions to mitigate and address these issues.
           Stay up- to- date on latest developments within the field.
           </Card>
           </Col>
         </Row>
      </div>
      <h1></h1>
      <h1></h1>
      <h1>Learning Program</h1>
         <Steps
           size="medium"
           current={1}
           items={[
             {
              title: 'Phase 1',
             },
             {
              title: 'Phase 2',
             },
             {
              title: 'Phase 3',
             }, ]}/><p></p>     
      
      <div style={{ padding: 15, textAlign: 'left' }}>   
         <Timeline>
         <Timeline.Item color="green">Pre- Requisites --> Basics knowledge of HTML, CSS,JavaScript and Bootstrap</Timeline.Item>
         <Timeline.Item color="green">Pre- Requisites --> Familiarity with React, including hooks</Timeline.Item>
         <Timeline.Item color="green">Passionate to learn React, ionic & WebApp Development</Timeline.Item>
         <Timeline.Item color="red">
           <p>Introduction to React and NodeJS</p>
           <p>NodeJS & ExpressJS Course</p>
           <p>Build Sports News Website Using React JS --> 2023-02-01</p>
         </Timeline.Item>
         <Timeline.Item>
           <p>REST web services, React Router, Forms</p>
           <p>Technical Assement 1</p>
           <p>Build Ecommerce site from scratch using React, Node&Bootstrap --> 2023-02-10</p>
        </Timeline.Item>
        <Timeline.Item color="gray">
           <p>HTTP requests, React AppContext, Bootstrap, jquery, ionic</p>
           <p>Technical Assement 2</p>
           <p>Ionic React: Cross- Platform Mobile Development with Ionic --> 2023-02-15</p>
        </Timeline.Item>
         <Timeline.Item color="gray">
           <p>Authentication, Single Page Application, Camera API</p>
          <p>Mini Project 2023-02-20</p>
        </Timeline.Item>
        <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
          <p>Coding --> 30-50 Lines of Code an Hour 2023-02-25</p>
          <p>Design --> 30 mins - 60 mins 1 Screen 2023-02-28</p>
        </Timeline.Item>
        </Timeline>
        </div>
        <h1>100% Compliance with above SLA</h1>
        <h1>Be a successful React.JS Developer & Excel the Career Forward!!</h1>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Orcalo DashBoard</Footer>
    </Layout>
  </Layout>
);

export default Dash;