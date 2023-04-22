import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, matchRoutes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styles from './index.module.less';
import { useStoreSelector } from '@/store';
import Logo from '@/components/Logo';
import { routes } from '@/router';
import { getMenuRoutes } from '@/router/helper';

function Menus() {
  const menus = getMenuRoutes(routes);
  const collapsed = useStoreSelector((state) => state.globalSlice.collapsed);
  const location = useLocation();
  const navigate = useNavigate();

  const [openKeys, setOpenKeys] = useState<string[]>();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys.slice(-1));
  };

  const onClick = (i: { key: string; keyPath: string[] }) => {
    navigate(i.key);
  };

  useEffect(() => {
    const paths = matchRoutes(routes, location.pathname);
    const defaultKeys = paths?.map((item) => item.pathname);
    setSelectedKeys(defaultKeys);
    setOpenKeys(defaultKeys);
  }, [location]);

  return (
    <div className={styles.sider}>
      <div className={styles.logo}>
        <Logo collapsed={collapsed} />
      </div>
      <div className={styles.content}>
        <Layout.Sider collapsed={collapsed} theme='light'>
          <Menu
            mode='inline'
            items={menus}
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            onOpenChange={onOpenChange}
            onClick={onClick}
          />
        </Layout.Sider>
      </div>
    </div>
  );
}

export default React.memo(Menus);
