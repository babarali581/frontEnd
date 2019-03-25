import React, { PureComponent } from 'react';

import { Row, Col, Card, Icon, Avatar, Anchor } from 'antd';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'dva/router';
const { Meta } = Card;
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

function onChange(a, b, c) {
  console.log(a, b, c);
}

class details extends PureComponent {
  constructor() {
    super();

    this.state = {
      visible: true,
    };
  }

  render() {
    return (
      <Row gutter={16}>
        <Col span={5}>
          <Card>
            <div>
              <button
                onClick={() => {
                  this.setState({ visible: !this.state.visible });
                }}
              >
                show
              </button>
              <Viewer
                width={2}
                noFooter={false}
                visible={this.state.visible} /// {this.state.visible}
                onClose={() => {
                  this.setState({ visible: false });
                }}
                images={[
                  { src: '/images/pet9.jpeg', alt: 'parriot' },
                  { src: '/images/pet8.jpeg', alt: 'parriot' },
                  { src: '/images/pet7.jpg', alt: 'parriot' },
                ]}
              />
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default details;
