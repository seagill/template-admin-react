import { Result, Button } from 'antd';
function ErrorPage() {
  return (
    <Result
      status='warning'
      title='格式错误'
      subTitle='上传的Markdown格式错误'
      extra={
        <>
          <Button type='primary'>重新上传</Button>
          <Button>返回</Button>
        </>
      }
    />
  );
}

export default ErrorPage;
