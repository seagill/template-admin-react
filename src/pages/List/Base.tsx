import { Table, Card, Button, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {}

function BaseList() {
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
        <Button type='primary'>新建</Button>
        <Input.Search placeholder='请输入' style={{ width: 304 }} />
      </div>
      <Table columns={columns} />
    </Card>
  );
}

export default BaseList;
