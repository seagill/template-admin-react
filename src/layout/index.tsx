import Header from './Header';
import Footer from './Footer';
import Sider from './Menus';
import { Layout } from 'antd';
const { Content } = Layout;
export default function LayoutSide() {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Content />
      </Layout>
      <Footer />
    </Layout>
  );
}
