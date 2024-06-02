import MainLayout from '@/components/templates/MainLayout';
import { ConfigProvider, message } from 'antd';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthContainer from './components/templates/AuthContainer';
import { PATHNAMES } from './configs/pathname';
import theme from './configs/theme';
import './i18n';
import './index.css';
import store from './store';
import { lazyWithRetry } from './utils/lazyWithRetry';

function App() {
  const Dashboard = lazyWithRetry(() => import('@/pages/dashboard/index'));
  const Login = lazyWithRetry(() => import('@/pages/auth/Login'));
  const ForgetPassword = lazyWithRetry(() => import('@/pages/auth/ForgetPassword'));
  const Page404 = lazyWithRetry(() => import('@/pages/404'));

  message.config({
    top: 100,
    duration: 3,
    maxCount: 3,
    rtl: false,
    prefixCls: 'my-message',
  });

  return (
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <Suspense fallback={<>...</>}>
          <BrowserRouter>
            <Routes>
              <Route path={PATHNAMES.LOGIN} element={<Login />} />
              <Route path={PATHNAMES.FORGETPASSWORD} element={<ForgetPassword />} />
              <Route element={<AuthContainer />}>
                <Route element={<MainLayout />}></Route>
              </Route>
              <Route path={PATHNAMES.PAGE_404} element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </ConfigProvider>
  );
}
export default App;
