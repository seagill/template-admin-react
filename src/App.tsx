import { Suspense } from 'react';
import store from '@/store';
import router from '@/router';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Spin } from 'antd';
function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spin />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </Provider>
  );
}

export default App;
