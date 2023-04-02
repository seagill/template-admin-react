import Header from './Header';
import Footer from './Footer';
import Sider from './Menus';
import { Layout } from 'antd';
import styles from './index.module.less';
const { Content } = Layout;
export default function LayoutSide() {
  return (
    <Layout className={styles.layout}>
      <Sider />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
}
