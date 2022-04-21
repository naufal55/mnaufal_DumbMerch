import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavbar from "./Component/MainNavbar";
import { PrivateOut, PrivateRoute } from "./Component/PrivateRoute";
import { CategoryList, ChatComplain, DetailPage, EditCategory, EditProduct, HomePages, LoginPages, NotFound, ProductList, Profile, RegisterPages } from "./Pages";


function App() {
  // const isLogin = localStorage.getItem('user')
  // const isLogin = true
  const [isLogin, setIsLogin] = useState()
  const handleIsLogin = () => setIsLogin(true);
  const handleIsLogout = () => setIsLogin(false);
  
  const isAdmin = false
  
  return (
    <BrowserRouter>
      {isLogin? <MainNavbar out={handleIsLogout} admin={isAdmin}/> : ""}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<PrivateOut login={isLogin} />}>
          {/* if false */}
          <Route path="/" element={<LoginPages click={handleIsLogin}/>} />
          <Route path="/login" element={<LoginPages click={handleIsLogin}/>} />
          <Route path="/register" element={<RegisterPages />} />
        </Route>
        <Route path="/" element={<PrivateRoute login={isLogin} />}>
          {/* if false */}
          <Route path="/homepage" element={<HomePages />} />
          <Route path="/detail-page/:id" element={<DetailPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/edit-category/:id" element={<EditCategory />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/complain" element={<ChatComplain />} />
          {/* <Route path="/logout"/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
