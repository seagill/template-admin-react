import BaseLayout from '@/layout/index';
import store from '@/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='app'>
          <BaseLayout />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
