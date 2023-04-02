import React from 'react';
import { Layout, Space, Input } from 'antd';
import { useStoreDispatch, useStoreSelector } from '@/store';
import { toggleCollapsed } from '@/store/feture/globalSlice';
import {
  MessageOutlined,
  GithubOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import style from './index.module.less';

const { Header } = Layout;

function LayoutHeader() {
  const dispatch = useStoreDispatch();
  const { collapsed } = useStoreSelector((state) => state.golabSlice);
  const setCollapsed = () => dispatch(toggleCollapsed());
  return (
    <Header className={style.header}>
      <div className={style.content}>
        <div>
          {collapsed ? (
            <MenuUnfoldOutlined onClick={() => setCollapsed()} />
          ) : (
            <MenuFoldOutlined onClick={() => setCollapsed()} />
          )}
        </div>
        <Space size='middle'>
          <Input placeholder='请输入关键字进行检索' />
          <MessageOutlined />
          <GithubOutlined />
          <QuestionCircleOutlined />
          <UserOutlined />
          <SettingOutlined />
        </Space>
      </div>
    </Header>
  );
}

export default React.memo(LayoutHeader);
