import Request from '@/service';
import { IUserInfo } from '@/store/feature/userSlice';

class UserApi extends Request {
  constructor() {
    super();
  }

  /**
   * @des 登录
   */
  signIn(data: { username: string; password: string }) {
    return this.request<{ token: string }>({
      url: '/login',
      method: 'POST',
      data,
    });
  }

  /**
   * @des 获取用户信息
   */
  getUserInfo() {
    return this.request<IUserInfo>({
      url: '/getUserInfo',
      method: 'GET',
    });
  }
}

export default new UserApi();
