import { StrictMode } from 'react';
// 严格模式
// import * as ReactDOMClient from 'react-dom/client';
import ReactDOMClient from 'react-dom/client';
/* Theme */
import { ThemeProvider } from 'commons/style/styled-components';
import { theme } from 'commons/style/theme';
import GlobalStyle from 'commons/style/global-style';

/* Context Providers */
import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

import App from 'components/App';

const root = document.getElementById('root')!;
const container = ReactDOMClient.createRoot(root);

container.render(
  <StrictMode>
    {/* 第一步传统实现内容 */}
    <App />
  </StrictMode>
);
