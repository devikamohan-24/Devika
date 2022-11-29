import 'antd/dist/reset.css';
import { Routes, Route } from "react-router-dom";
import Layout from './layouts';
import Applicationform from './pages/dashboard/application';
import Login from './pages/login/login';
import Signup from './pages/register/signup';
import Interest from './pages/dash1/express';
import Dash from './pages/product/AddProduct';
// import studentdash from './pages/Student/studentdash';
// import AddProduct from './pages/product/AddProduct';
// import ProductList from './pages/product/ProductList';

export default function App() {

  // 
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<ProductList />} /> */}
        <Route path="product" element={<Dash />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        {/* <Route path="Student" element={<studentdash />} /> */}
        <Route path="dashboard" element={<Applicationform />} />
        <Route path="dash1"  element={<Interest />} />
      </Route>
    </Routes>
  );
}





