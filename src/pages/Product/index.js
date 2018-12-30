import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import {cloudnary} from 'cloudinary';

import {
  Form,
  Input,
  Select,
  Button,
  Radio,
  Card,
  Upload,
  message,
  Icon,
  Modal,
  Row,
  Col,
  InputNumber,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ImageUpload from '@/components/ImageUpload/ImageUpload';
const FormItem = Form.Item;
const Option = Select.Option;
@connect(({ cloudAccounts, loading }) => ({ cloudAccounts, loading: loading.models.cloudAccounts }))

class Store extends PureComponent {

  componentDidMount() {
  
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        var { dispatch } = this.props;
        dispatch({
          type: 'cloudAccounts/addProduct',
          payload: {
           values
          },
        });
      }
    });
  };

  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };
 
  render() {
    const { getFieldDecorator } = this.props.form;
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null;

    const { previewVisible, previewImage, fileList } = this.state;

    ////////form/////////////
    return (
      <PageHeaderWrapper title="Add product">
        <Card title="">
          <Row>
            <Col>
              <Form layout={formLayout} onSubmit={this.handleSubmit}>
                <FormItem label="Product Image" {...formItemLayout}>
                  <ImageUpload count={3} />
                </FormItem>
                <FormItem {...formItemLayout} label="Product Name">
                {getFieldDecorator('productname', { initialValue: '' })(<Input placeholder="Enter Product name" />)}
                  {/* <Input placeholder="Enter Product name" /> */}
                </FormItem>
                <FormItem {...formItemLayout} label="Select Category" hasFeedback>
                  {getFieldDecorator('category', {
                    rules: [{ required: true, message: 'Please select your country!' }],
                  })(
                    <Select placeholder="Product Category">
                      <Option value="Ladies">Ladies garments</Option>
                      <Option value="Gents">Gents garments</Option>
                      <Option value="Child">Child garments</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem {...formItemLayout} label="Product Price">
                  {getFieldDecorator('productprice', { initialValue: 1 })(<InputNumber min={1} />)}
                </FormItem>
                <FormItem {...formItemLayout} label="Delivery Charges">
                  {getFieldDecorator('deliverycharges')(<InputNumber min={1} />)}
                </FormItem>

                <FormItem {...buttonItemLayout}>
                <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
          {/* ////////form///////////// */}
        </Card>
      </PageHeaderWrapper>
    );
  }
}
const WrappedLogin = Form.create()(Store);

export default WrappedLogin;
