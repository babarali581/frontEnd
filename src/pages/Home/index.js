import React, { PureComponent } from 'react';

import { Row, Col, Card, Icon, Avatar, Anchor } from 'antd';
import { Link } from 'dva/router';
const { Meta } = Card;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
class HomePage extends PureComponent {
  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px', backgroundColor: '#8cbed6' }}>
        <Row gutter={16}>
          <Col span={5}>
            <Link to={'/details?image=pet7.jpg'}>
              <Card
                style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
                cover={
                  <img
                    alt="example"
                    style={{ height: 200, width: '100%', borderRadius: '30%' }}
                    src="/images/pet1.jpg"
                  />
                }
                // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Baby Dog"
                  description="23000Rs"
                />
              </Card>
            </Link>
          </Col>
          <Col span={5}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%', borderRadius: '30%' }}
                  src="/images/pet11.jpeg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%', borderRadius: '30%' }}
                  src="/images/pet4.jpeg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%', borderRadius: '30%' }}
                  src="/images/pet10.jpeg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={5}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%', borderRadius: '30%' }}
                  src="/images/pet11.jpeg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%', borderRadius: '30%' }}
                  src="/images/pet7.jpg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%', borderRadius: '30%' }}
                  src="/images/pet8.jpeg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%', borderRadius: '30%' }}
                  src="/images/pet9.jpeg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <br />{' '}
        <Row gutter={16}>
          <Col span={5}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%', borderRadius: '30%' }}
                  src="/images/pet9.jpeg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%', borderRadius: '30%' }}
                  src="/images/pet10.jpeg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%' }}
                  src="/images/pet11.jpeg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{ width: 250, backgroundColor: '#8cbed6', borderColor: '#8cbed6' }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200, width: '100%' }}
                  src="/images/pet13.jpeg"
                />
              }
              // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <br />{' '}
      </div>
    );
  }
}

export default HomePage;
