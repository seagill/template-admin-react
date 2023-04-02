import Header from './Header';
import Footer from './Footer';
import Sider from './Menus';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
import { RouteItem } from '@/router';
import { pathJoin } from '@/router/helper';
const { Content } = Layout;
interface LayoutSideProps {
  routes: RouteItem[];
  path: string;
}

export default function LayoutSide(props: LayoutSideProps) {
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
