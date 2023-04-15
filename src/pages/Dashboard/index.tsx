import CardNum from './components/Card';
import { Row, Col, Card, Table } from 'antd';
import { FileOutlined, PayCircleOutlined, LineChartOutlined, BarChartOutlined } from '@ant-design/icons';
import { Chart, LineAdvance, DonutChart, Point } from 'bizcharts';
import { data, data2, data3, data4 } from '@/mock/dashboard';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
export default function Login() {
  const list = [
    { title: '广告收益', num: 153800, Icon: <PayCircleOutlined className='GoldColor' />, rate: 20, rateType: 0 },
    { title: '访问量', num: 5320, Icon: <LineChartOutlined className='MagentaColor' />, rate: 15, rateType: 1 },
    { title: '活跃用户', num: 1563, Icon: <BarChartOutlined className='BlueColor' />, rate: 10, rateType: 1 },
    { title: '文章数量', num: 865, Icon: <FileOutlined className='PurpleColor' />, rate: 8, rateType: 1 },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  return (
    <Row gutter={[20, 20]}>
      {list.map((item) => (
        <Col span={6} key={item.title}>
          <CardNum {...item}></CardNum>
        </Col>
      ))}

      <Col span={18}>
        <Card>
          <Chart padding={[10, 20, 50, 40]} autoFit height={350} data={data}>
            <LineAdvance shape='smooth' point area position='month*temperature' color='city' />
          </Chart>
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <DonutChart
            data={data2 || []}
            title={{
              visible: true,
              text: '环图',
            }}
            autoFit
            description={{
              visible: true,
              text: '环图的外半径决定环图的大小，而内半径决定环图的厚度。',
            }}
            height={350}
            radius={0.8}
            padding='auto'
            angleField='value'
            colorField='type'
            pieStyle={{ stroke: 'white', lineWidth: 5 }}
          />
        </Card>
      </Col>

      <Col span={12}>
        <Card>
          <Table columns={columns} pagination={false} dataSource={data3} size='middle' />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Table columns={columns} pagination={false} dataSource={data3} size='middle' />
        </Card>
      </Col>

      <Col span={24}>
        <Card>
          <Chart padding={[20]} height={300} autoFit data={data4}>
            <Point position='year*sales' />
          </Chart>
        </Card>
      </Col>
    </Row>
  );
}
