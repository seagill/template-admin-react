import { Form, Button, Input, Row, Col, Checkbox, QRCode } from 'antd';
import styles from './index.module.less';
import { useState } from 'react';
import { LockOutlined, UserOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
type LoginType = 'Account' | 'SmsCode' | 'QRCode';
const style = { height: '100%' };

export default function Login() {
  const [loginType, setLoginType] = useState<LoginType>('Account');
  const UserIcon = loginType === 'Account' ? UserOutlined : MobileOutlined;
  const placeholder = loginType === 'Account' ? '请输入账号' : '请输入手机号';
  const navigator = useNavigate();
  const handleLogin = () => {
    navigator('/');
  };
  return (
    <div className={styles.login}>
      <Row style={style}>
        <Col style={style} span={16}></Col>
        <Col style={style} span={8} className={styles.center}>
          <div className={styles.form}>
            <h3 className={styles.title}>登录到 Sea Gill Template</h3>
            {loginType === 'QRCode' ? (
              <QRCode value='seagill.top' size={225} />
            ) : (
              <Form>
                <Form.Item>
                  <Input placeholder={placeholder} prefix={<UserIcon />} />
                </Form.Item>
                {loginType === 'Account' && (
                  <Form.Item>
                    <Input.Password placeholder='请输入密码' prefix={<LockOutlined />} />
                  </Form.Item>
                )}
                {loginType === 'SmsCode' && (
                  <Form.Item>
                    <div className='flex-between'>
                      <Input placeholder='请输入验证码' prefix={<MailOutlined />} />
                      <Button style={{ marginLeft: '10px' }}>获取验证码</Button>
                    </div>
                  </Form.Item>
                )}
                <Form.Item>
                  <div className='flex-between'>
                    <Checkbox>记住密码</Checkbox>
                    <Button type='link'>忘记账号</Button>
                  </div>
                </Form.Item>
                <Form.Item>
                  <Button type='primary' style={{ width: '100%' }} onClick={handleLogin}>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            )}

            <div className='flex-between'>
              <div>
                {loginType !== 'QRCode' && (
                  <Button type='link' onClick={() => setLoginType('QRCode')}>
                    微信扫码登录
                  </Button>
                )}
                {loginType !== 'Account' && (
                  <Button type='link' onClick={() => setLoginType('Account')}>
                    账号密码登录
                  </Button>
                )}
                {loginType !== 'SmsCode' && (
                  <Button type='link' onClick={() => setLoginType('SmsCode')}>
                    手机号验证码登录
                  </Button>
                )}
              </div>
              <Button type='link'>注册</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
