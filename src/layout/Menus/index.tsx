import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styles from './index.module.less';
import { useStoreSelector } from '@/store';
import Logo from '@/components/Logo';
import { routes } from '@/router';
import { getMenuRoutes } from '@/router/helper';
const menus = getMenuRoutes(routes);

function Menus() {
  const collapsed = useStoreSelector((state) => state.golabSlice.collapsed);

  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([location.pathname]);

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys.slice(-1));
  };

  const onClick = (i: { key: string; keyPath: string[] }) => {
    setOpenKeys(i.keyPath);
  };

  return (
    <div className={styles.sider}>
      <div className={styles.logo}>
        <Logo collapsed={collapsed} />
      </div>
      <div className={styles.content}>
        <Layout.Sider collapsed={collapsed} theme='light'>
          <Menu mode='inline' items={menus} openKeys={openKeys} onOpenChange={onOpenChange} onClick={onClick} />
        </Layout.Sider>
      </div>
    </div>
  );
}

export default React.memo(Menus);
