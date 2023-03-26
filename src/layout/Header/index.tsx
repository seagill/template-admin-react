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
    <Header>
      <div className={style.logo}></div>
      <div>
        <>
          <MenuFoldOutlined />
          <MenuUnfoldOutlined />
        </>
        <Space>
          <Input />
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
