import { Routes, Route, HashRouter } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { HomePage } from './modules/HomePage';
import { Favorites } from './modules/Favorites';
import { Cart } from './modules/Cart';
import { PhonePage } from './modules/PhonePage';
import { TabletsPage } from './modules/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { ProductDetail } from './components/ProductDetail';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <ProductProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="/phones" element={<PhonePage />}>
            <Route
              path=":productId"
              element={<ProductDetail category="phones" />}
            />
          </Route>

          <Route path="/tablets" element={<TabletsPage />}>
            <Route
              path=":productId"
              element={<ProductDetail category="tablets" />}
            />
          </Route>
          <Route path="/accessories" element={<AccessoriesPage />}>
            <Route
              path=":productId"
              element={<ProductDetail category="accessories" />}
            />
          </Route>

          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ProductProvider>
  </HashRouter>
);
