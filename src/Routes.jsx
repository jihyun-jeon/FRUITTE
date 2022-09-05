import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ProductList from './pages/ProductList/ProductList';
import Order from './pages/Order/Order';
import Register from './pages/Register/Register';
import RegisterList from './pages/RegisterList/RegisterList';
import OrderContent from './pages/OrderContent/OrderContent';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <BrowserRouter>
      <Nav onToggle={onToggle} />
      <Routes>
        <Route path="/" element={<ProductList toggle={toggle} onToggle={onToggle} />} />
        <Route path="/order" element={<Order />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register_list">
          <Route index element={<RegisterList />} />
          <Route path=":page" element={<RegisterList />} />
        </Route>
        <Route path="/ordercontent" element={<OrderContent />} />
        <Route path="/fruitstore/:idx" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
