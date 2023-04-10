import { Spin } from 'antd';
import styles from './index.module.less';
function Loading() {
  return (
    <div className={styles.loading}>
      <Spin />
    </div>
  );
}

export default Loading;
