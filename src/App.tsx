import { Suspense } from 'react';
import store from '@/store';
import router from '@/router';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Loading from '@/components/Loading';
function App() {
  return (
    <ConfigProvider>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
