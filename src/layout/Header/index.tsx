import style from './index.module.less';
import { Layout, Space, Input } from 'antd';
import {
  MessageOutlined,
  GithubOutlined,
  QuestionOutlined,
  UserOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
export default () => {
  return (
    <Header className={style.header}>
      <div className={style.content}>
        <div>
          <MenuFoldOutlined />
          <MenuUnfoldOutlined />
        </div>
        <Space size='middle'>
          <Input placeholder='请输入关键字进行检索' />
          <MessageOutlined />
          <GithubOutlined />
          <QuestionOutlined />
          <UserOutlined />
          <SettingOutlined />
        </Space>
      </div>
    </Header>
  );
};
