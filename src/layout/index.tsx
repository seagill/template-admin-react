import Header from './Header';
import Footer from './Footer';
import Sider from './Menus';
import { Layout, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
import { useBreadcrumb } from '@/hooks/useBreadcrumb';
const { Content } = Layout;

function LayoutSide() {
  const items = useBreadcrumb();
  return (
    <Layout className={styles.layout}>
      <Sider />
      <Layout>
        <Header />
        <Content>
          <div className={styles.content}>
            <div className={styles.breadcrumb}>
              <Breadcrumb items={items}></Breadcrumb>
            </div>
            <Outlet />
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default LayoutSide;
