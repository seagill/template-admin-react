import React from 'react';
import { Layout } from 'antd';
import styles from './index.module.less';

function LayoutFooter() {
  return <Layout.Footer className={styles.footer}>Copyright © 2022-2023 seagill. All Rights Reserved</Layout.Footer>;
}

export default React.memo(LayoutFooter);
