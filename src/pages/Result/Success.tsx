import { Result, Button } from 'antd';
function ErrorPage() {
  return (
    <Result
      status='success'
      title='操作成功'
      subTitle='文章发布成功'
      extra={
        <>
          <Button type='primary'>查看数据</Button>
          <Button>再次申请</Button>
        </>
      }
    />
  );
}

export default ErrorPage;
