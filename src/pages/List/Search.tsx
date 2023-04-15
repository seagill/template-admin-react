import { Table, Card, Button, Input, Form, Select, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {}
const style = { width: '240px' };
function SearchList() {
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
    <Card>
      <div className='mb10 flex-between'>
        <Form layout='inline'>
          <Form.Item label='类型'>
            <Select style={style} />
          </Form.Item>
          <Form.Item label='题目'>
            <Input style={style} />
          </Form.Item>
          <Form.Item label='状态'>
            <Select style={style} />
          </Form.Item>
          <Space>
            <Button type='primary'>搜索</Button>
            <Button type='default'>重置</Button>
          </Space>
        </Form>
      </div>
      <Table columns={columns} />
    </Card>
  );
}

export default SearchList;
