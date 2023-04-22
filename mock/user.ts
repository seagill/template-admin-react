import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/login',
    method: 'post',
    response: (request) => {
      const params = request.body;
      console.log(request);
      if (!params.username || !params.password || params.username !== 'admin' || params.password !== 'admin') {
        return {
          code: 10001,
          message: '用户名密码错误',
          data: null,
        };
      }
      return {
        code: 1000,
        message: 'success',
        data: {
          token: 'sdfsfaaaaaaaaaaagasdg',
        },
      };
    },
  },
  {
    url: '/getUserInfo',
    method: 'get',
    response: () => {
      return {
        code: 1000,
        message: 'success',
        data: {
          username: 'sea gill',
          motto: '努力，奋斗！',
          mobile: '13389563333',
          avatar: '',
          dept: 'Dev-1',
          site: '7-1021',
          professional: 'DC',
          alias: 'Vpro',
          team: 'TES',
          landline: '85623333',
          superior: 'Frank',
        },
      };
    },
  },
] as MockMethod[];
