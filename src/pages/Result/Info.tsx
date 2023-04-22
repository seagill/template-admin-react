import { Result, Button } from 'antd';
function ErrorPage() {
  return <Result status='info' title='文章已发布' extra={<Button type='primary'>返回首页</Button>} />;
}

export default ErrorPage;
