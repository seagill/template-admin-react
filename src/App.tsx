import { Suspense } from 'react';
import store from '@/store';
import router from '@/router';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Spin, ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider>
      <Provider store={store}>
        <Suspense fallback={<Spin />}>
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
