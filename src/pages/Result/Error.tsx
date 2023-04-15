import { Result, Button } from 'antd';
function ErrorPage() {
  return (
    <Result
      status='error'
      title='403'
      subTitle='您还没有访问该页面的权限，请联系管理员开通'
      extra={<Button type='primary'>返回首页</Button>}
    />
  );
}

export default ErrorPage;
