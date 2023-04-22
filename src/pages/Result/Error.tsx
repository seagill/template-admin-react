import { Result, Button } from 'antd';
function ErrorPage() {
  return (
    <Result
      status='error'
      title='添加失败'
      subTitle='无法连接服务器！'
      extra={
        <>
          <Button type='primary'>返回</Button>
          <Button>重新添加</Button>
        </>
      }
    />
  );
}

export default ErrorPage;
