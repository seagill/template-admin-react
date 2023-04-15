import React from 'react';
import { Card, Skeleton, Statistic } from 'antd';
import { FallOutlined, RiseOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import classNames from 'classnames';
interface Props {
  title: string;
  num: number;
  Icon: React.ReactNode;
  rate: number;
  rateType: number;
}
function CardNum(props: Props) {
  const { Icon } = props;
  const textCss = props.rateType === 1 ? 'up' : props.rateType === 0 ? 'down' : '';
  return (
    <Skeleton loading={false}>
      <Card className={styles.card}>
        <h3>{props.title}</h3>
        <div className={styles.content}>
          <Statistic value={props.num} />
          {Icon}
        </div>
        <div className={classNames(styles.des, styles.text)}>
          <span className={styles.pr10}>较上周</span>
          {props.rateType === 1 ? <RiseOutlined className={styles.up} /> : null}
          {props.rateType === 0 ? <FallOutlined className={styles.down} /> : null}
          <b className={classNames(styles.pl5, styles.text, styles[textCss])}>{props.rate}%</b>
        </div>
      </Card>
    </Skeleton>
  );
}

export default CardNum;
