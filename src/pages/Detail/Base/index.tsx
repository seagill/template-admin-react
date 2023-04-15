import { Card, Descriptions } from 'antd';
function BaseDetail() {
  return (
    <Card>
      <Descriptions title='类型详情'>
        <Descriptions.Item label='类型'>Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label='题目'>1810000000</Descriptions.Item>
        <Descriptions.Item label='状态'>Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label='备注'>empty</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default BaseDetail;
