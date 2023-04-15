import { Button, Card, Form, Input, Select, Space, Steps, Result } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function BaseForm() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  return (
    <Card>
      <Steps
        current={current}
        className='mb20'
        items={[
          {
            title: '填写表单',
          },
          {
            title: '确认表单',
          },
          {
            title: '完成',
          },
        ]}
      />
      <div className='flex-center'>
        {current !== 2 && (
          <Form colon={false} style={{ width: 600 }} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
            <Form.Item label='类型'>
              <Select />
            </Form.Item>
            <Form.Item label='题目'>
              <Input />
            </Form.Item>
            <Form.Item label=' '>
              <Space>
                {current === 1 && (
                  <Button type='primary' onClick={() => setCurrent((p) => p - 1)}>
                    上一步
                  </Button>
                )}
                {(current === 0 || current === 1) && (
                  <Button type='primary' onClick={() => setCurrent((p) => p + 1)}>
                    下一步
                  </Button>
                )}
              </Space>
            </Form.Item>
          </Form>
        )}
        {current === 2 && (
          <Result
            status='success'
            title='添加成功'
            subTitle='..'
            extra={[
              <Button type='primary' onClick={() => setCurrent(0)}>
                再次申请
              </Button>,
              <Button onClick={() => navigate('/list/base')}>查看</Button>,
            ]}
          />
        )}
      </div>
    </Card>
  );
}

export default BaseForm;
