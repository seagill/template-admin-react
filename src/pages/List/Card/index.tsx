import { Card, Row, Col, Pagination } from 'antd';
import styles from './index.module.less';
function CardList() {
  const list = [
    {
      id: 1,
      title: 'TDesign',
      content: 'TDesign 为了在开源体系的基础上打造具有自身品牌特色且好⽤的产品，秉承包容、多元、进化、连接的价值观。',
      href: 'https://tdesign.tencent.com/',
    },
    {
      id: 2,
      title: 'Ant Design',
      content: '助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～',
      href: 'https://ant-design.gitee.io/index-cn',
    },
    {
      id: 3,
      title: 'Arco Design',
      content: '智能设计体系,连接轻盈体验,字节跳动出品的企业级设计系统',
      href: '',
    },
    {
      id: 4,
      title: 'Element',
      content: '开箱即用的中后台前端解决方案',
      href: 'https://element.eleme.cn/#/zh-CN',
    },
    {
      id: 5,
      title: 'Vant',
      content: '轻量、可定制的移动端 Vue 组件库',
      href: 'https://vant-contrib.gitee.io/vant/#/zh-CN',
    },
    {
      id: 6,
      title: 'BizCharts',
      content:
        '企业中后台的,可视化解决方案BizCharts是阿里通用图表组件库，致力于打造企业中后台高效、专业、便捷的数据可视化解决方案，基于 G2与G2Plot封装的React图表库，已经历阿里复杂业务场景长达三年的洗礼，在灵活性、易用性、丰富度上满足常规图表和高度自定义图表的业务实现。',
      href: 'https://bizcharts.taobao.com/',
    },
  ];
  return (
    <Row gutter={[20, 20]}>
      {list.map((item) => (
        <Col key={item.id} span={8}>
          <Card>
            <h3>{item.title}</h3>
            <p className={styles.content}>{item.content}</p>
          </Card>
        </Col>
      ))}
      <Pagination total={list.length} />
    </Row>
  );
}

export default CardList;
