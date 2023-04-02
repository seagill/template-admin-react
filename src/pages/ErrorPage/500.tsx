import { Result, Button } from 'antd';
function ErrorPage() {
  return (
    <Result status='500' title='500' subTitle='系统除了一些问题！' extra={<Button type='primary'>返回首页</Button>} />
  );
}

export default ErrorPage;
