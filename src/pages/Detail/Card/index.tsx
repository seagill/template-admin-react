import { Descriptions, Card, Table, Row } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {}

function BaseDetail() {
  const columns: ColumnsType<DataType> = [
    {
      title: '类型',
      dataIndex: 'type',
    },
    {
      title: '题目',
      dataIndex: 'title',
    },
    {
      title: '状态',
      dataIndex: 'type',
    },
    {
      title: '备注',
      dataIndex: 'type',
    },
    {
      title: '操作',
      dataIndex: 'type',
    },
  ];
  return (
    <Row gutter={[0, 20]}>
      <Card>
        <Descriptions title='类型详情'>
          <Descriptions.Item label='类型'>Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label='题目'>1810000000</Descriptions.Item>
          <Descriptions.Item label='状态'>Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label='备注'>empty</Descriptions.Item>
        </Descriptions>
      </Card>
      <Card style={{ width: '100%' }}>
        <Table columns={columns} />
      </Card>
    </Row>
  );
}

export default BaseDetail;
