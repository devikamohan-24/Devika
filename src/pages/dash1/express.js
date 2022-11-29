import React, { FC } from "react";
import { Card, Col, Row } from 'antd';


const Interest: React.FC = () => (
  <div className="site-card-border-less-wrapper">
   <Row gutter={[24,24]}>
      <Col span={6}>

    <Card title="Front End Team" bordered={false} hoverable  style ={{ width: 300 }}>
      <p>Be a successful NodeJS (Express.JS) Based Developer & Excel the Career Forward. </p>
      {<a href="#">More>></a>}
    </Card>
    </Col>

    <Col span={6}>

    <Card title="Back End Team" bordered={false} hoverable style={{ width: 300 }}>
      <p>Be a React Based Developer & Excel the Career Forward. </p>
      {<a href="#">More>></a>}
      
    </Card>
    </Col>

    <Col span={6}>

    <Card title="Back End Team" bordered={false} hoverable style={{ width: 300 }}>
      <p>Be a React Based Developer & Excel the Career Forward. </p>
      {<a href="#">More>></a>}
    </Card>
    </Col>

    <Col span={6}>

<Card title="Back End Team" bordered={false} hoverable style={{ width: 300 }}>
  <p>Be a React Based Developer & Excel the Career Forward. </p>
  {<a href="#">More>></a>}
</Card>
</Col>

<Col span={6}>

    <Card title="Back End Team" bordered={false} hoverable style={{ width: 300 }}>
      <p>Be a React Based Developer & Excel the Career Forward. </p>
      {<a href="#">More>></a>}
    </Card>
    </Col>

    <Col span={6}>

<Card title="Back End Team" bordered={false} hoverable style={{ width: 300 }}>
  <p>Be a React Based Developer & Excel the Career Forward. </p>
  {<a href="#">More>></a>}
</Card>
</Col>

<Col span={6}>

    <Card title="Back End Team" bordered={false} hoverable style={{ width: 300 }}>
      <p>Be a React Based Developer & Excel the Career Forward. </p>
      {<a href="#">More>></a>}
    </Card>
    </Col>

    <Col span={6}>

    <Card title="Back End Team" bordered={false} hoverable style={{ width: 300 }}>
      <p>Be a React Based Developer & Excel the Career Forward. </p>
      {<a href="#">More>></a>}
    </Card>
    </Col>
    </Row>
  </div>
);

export default Interest;
