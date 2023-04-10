import store from '@/store';
import router from '@/router';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
function App() {
  return (
    <ConfigProvider>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
