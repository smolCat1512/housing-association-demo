import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {Stack} from '@twilio-paste/core/stack';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IndexPage} from './pages/IndexPage';
import {Loading} from './components/Loading';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Page1 = React.lazy(async () => import('./pages/Page1'));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Page2 = React.lazy(async () => import('./pages/Page2'));
const Page3 = React.lazy(async () => import('./pages/Page3'));


export const Index: React.FC = () => {
  return (
    <App>
      <React.Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </App>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.querySelector('#root')
);

/**
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
// eslint-disable-next-line no-console
reportWebVitals(console.log);
