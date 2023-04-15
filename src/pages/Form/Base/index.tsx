import { Button, Form, Input, Select, Space, Card } from 'antd';

function BaseForm() {
  return (
    <Card className='flex-center'>
      <Form colon={false} style={{ width: 600 }} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
        <Form.Item label='类型'>
          <Select />
        </Form.Item>
        <Form.Item label='题目'>
          <Input />
        </Form.Item>
        <Form.Item label=' '>
          <Space>
            <Button type='primary'>提交</Button>
            <Button>重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default BaseForm;
