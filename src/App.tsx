import "./styles/color.css";
import "./styles/typography.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import AddProducts from "./pages/products/addProducts";
import Categories from "./pages/categories";
import AddCategories from "./pages/categories/addCategories";
import Layout from "./components/Layout";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="products" element={<Products />}>
            <Route path="addProduct" element={<AddProducts />} />
          </Route>
          <Route path="categories" element={<Categories />}>
            <Route path="addCategories" element={<AddCategories />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
