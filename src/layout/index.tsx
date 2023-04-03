import Header from './Header';
import Footer from './Footer';
import Sider from './Menus';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
const { Content } = Layout;

export default function LayoutSide() {
  return (
    <Layout className={styles.layout}>
      <Sider />
      <Layout>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
