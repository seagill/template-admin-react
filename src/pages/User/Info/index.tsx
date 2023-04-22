import { Row, Col, Card, Avatar, Descriptions, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useStoreSelector, useStoreDispatch } from '@/store';
import { getUserInfo } from '@/store/feature/userSlice';
import { useEffect, useState } from 'react';
function Info() {
  const [loading, setLoading] = useState(false);
  const userInfo = useStoreSelector((state) => state.userSlice.userInfo);
  const dispatch = useStoreDispatch();
  const getInfo = () => {
    setLoading(true);
    try {
      dispatch(getUserInfo());
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <Spin spinning={loading}>
      <Row gutter={[20, 20]}>
        <Col span={6}>
          <Card>
            <div className='flex-center-column'>
              <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} icon={<UserOutlined />} />
              <h3>{userInfo?.username}</h3>
              <h3>{userInfo?.motto}</h3>
            </div>
          </Card>
        </Col>
        <Col span={18}>
          <Card>
            <Descriptions title=''>
              <Descriptions.Item label='电话'>{userInfo?.mobile}</Descriptions.Item>
              <Descriptions.Item label='部门'>{userInfo?.dept}</Descriptions.Item>
              <Descriptions.Item label='座位'>{userInfo?.site}</Descriptions.Item>
              <Descriptions.Item label='职称'>{userInfo?.professional}</Descriptions.Item>
              <Descriptions.Item label='直属上级'>{userInfo?.superior}</Descriptions.Item>
              <Descriptions.Item label='花名'>{userInfo?.alias}</Descriptions.Item>
              <Descriptions.Item label='座机'>{userInfo?.landline}</Descriptions.Item>
              <Descriptions.Item label='所属团队'>{userInfo?.team}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </Spin>
  );
}

export default Info;
