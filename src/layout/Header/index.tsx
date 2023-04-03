import React from 'react';
import { Layout, Space, Input, Tooltip, Badge } from 'antd';
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
const color = '#fff';
const overlayInnerStyle = { color: '#000' };
function LayoutHeader() {
  const dispatch = useStoreDispatch();
  const { collapsed } = useStoreSelector((state) => state.golabSlice);
  const setCollapsed = () => dispatch(toggleCollapsed());
  return (
    <Header className={style.header}>
      <div className={style.content}>
        <div>
          <Tooltip title={collapsed ? '展开菜单' : '折叠菜单'} color={color} overlayInnerStyle={overlayInnerStyle}>
            {collapsed ? (
              <MenuUnfoldOutlined className={style.icon} onClick={() => setCollapsed()} />
            ) : (
              <MenuFoldOutlined className={style.icon} onClick={() => setCollapsed()} />
            )}
          </Tooltip>
        </div>
        <Space size='middle'>
          <Input placeholder='请输入关键字进行检索' />
          <Tooltip title='站内信' color={color} overlayInnerStyle={overlayInnerStyle}>
            <Badge count={10} size='small' offset={[5, -5]}>
              <MessageOutlined className={style.icon} />
            </Badge>
          </Tooltip>
          <Tooltip title='代码仓库' color={color} overlayInnerStyle={overlayInnerStyle}>
            <GithubOutlined className={style.icon} />
          </Tooltip>
          <Tooltip title='帮助文档' color={color} overlayInnerStyle={overlayInnerStyle}>
            <QuestionCircleOutlined className={style.icon} />
          </Tooltip>
          <Tooltip title='用户中心' color={color} overlayInnerStyle={overlayInnerStyle}>
            <UserOutlined className={style.icon} />
          </Tooltip>
          <SettingOutlined className={style.icon} />
        </Space>
      </div>
    </Header>
  );
}

export default React.memo(LayoutHeader);
