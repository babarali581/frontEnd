import React, { PureComponent } from 'react';

import { Row, Col, Card, Icon, Avatar, Anchor } from 'antd';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'dva/router';
const { Meta } = Card;

function onChange(a, b, c) {
  console.log(a, b, c);
}

class details extends PureComponent {
  render() {
    return (
      <Carousel  style={{ height: 300 }} width="300px" height={30000} dynamicHeight={true} centerSlidePercentage={80}>
        <div style={{ height: 300, width: '100px' }}>
          <img src="images/pet1.jpg" style={{ height: 100, width: '200px' }} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="images/pet2.jpeg" style={{ height: 100, width: '200px' }} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="images/pet3.jpeg" style={{ height: 100, width: '200px' }} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
export default details;
