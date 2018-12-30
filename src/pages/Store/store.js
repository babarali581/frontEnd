import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
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
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ImageUpload from '@/components/ImageUpload/ImageUpload';
import styles from './SellerProfile.less';
const FormItem = Form.Item;
@connect(({ store, loading }) => ({ store, loading: loading.models.store }))
class Store extends PureComponent {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
      imageData: [],
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let image = this.state.imageData
      //  console.log('imageData length ', image[0].name);
      //  console.log("thumbUrl ",image[0].thumbUrl)
        const formData = new FormData();
        formData.append(image[0].name ,image[0].thumbUrl );
        values.ImageDate = formData;
        console.log('Received values of form: ', formData);
        var { dispatch } = this.props;
        dispatch({
          type: 'store/addProduct',
          payload: {
            values,
          },
        });
      }
    });
  };
  saveImage(imageData) {
    this.setState({ imageData });
  }
  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '+92',
    })(
      <Select style={{ width: 70 }}>
        <Option value="+92">+92</Option>
        <Option value="021">021</Option>
      </Select>
    );
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
      <PageHeaderWrapper title="Create Store">
        <Card title="Fill Up Form">
          <Row>
            <Col>
              <Form layout={formLayout} onSubmit={this.handleSubmit}>
                <FormItem label="Store Image" {...formItemLayout}>
                  <ImageUpload count={1} getImage={this.saveImage.bind(this)} />
                </FormItem>
                <FormItem label="Store Name" {...formItemLayout}>
                  {getFieldDecorator('storeName', {
                    required: true,
                  })(<Input placeholder="input store name" />)}
                </FormItem>
                <FormItem label="Store Address" {...formItemLayout}>
                  {getFieldDecorator('storeAddress', {
                    required: true,
                  })(<Input placeholder="input store address" />)}
                </FormItem>
                <FormItem label="EmailAddress" {...formItemLayout}>
                  {getFieldDecorator('EmailAddress', {
                    required: true,
                  })(<Input placeholder="input email address" />)}
                </FormItem>
                <FormItem {...formItemLayout} label="Phone Number">
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                  })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </FormItem>

                <FormItem {...buttonItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Create Store
                  </Button>
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

const WrappedSeller = Form.create()(Store);

export default WrappedSeller;
