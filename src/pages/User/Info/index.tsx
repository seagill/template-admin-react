import { Row, Col, Card, Avatar, Descriptions } from 'antd';
import { UserOutlined } from '@ant-design/icons';
function Info() {
  return (
    <Row gutter={[20, 20]}>
      <Col span={6}>
        <Card>
          <div className='flex-center-column'>
            <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} icon={<UserOutlined />} />
            <h3>sea gill</h3>
            <h3>努力， 奋斗！</h3>
          </div>
        </Card>
      </Col>
      <Col span={18}>
        <Card>
          <Descriptions title=''>
            <Descriptions.Item label='电话'>Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label='部门'>1810000000</Descriptions.Item>
            <Descriptions.Item label='座位'>Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label='职称'>empty</Descriptions.Item>
            <Descriptions.Item label='直属上级'>empty</Descriptions.Item>
            <Descriptions.Item label='花名'>empty</Descriptions.Item>
            <Descriptions.Item label='座机'>empty</Descriptions.Item>
            <Descriptions.Item label='所属团队'>empty</Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
    </Row>
  );
}

export default Info;
