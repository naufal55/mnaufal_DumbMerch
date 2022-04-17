import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavbar from "./Component/MainNavbar";
import { PrivateOut, PrivateRoute } from "./Component/PrivateRoute";
import { DetailPage, HomePages, LoginPages, NotFound, RegisterPages } from "./Pages";

function App() {
  // const [isLogin, setIslogin] = useState(localStorage.getItem('user'))
  // const isLogin = localStorage.getItem('user')
  const isLogin = true
  console.log(isLogin);
  return (
    <BrowserRouter>
      {isLogin? <MainNavbar /> : ""}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<PrivateOut login={isLogin} />}>
          {/* if false */}
          <Route path="/" element={<LoginPages />} />
          <Route path="/login" element={<LoginPages/>} />
          <Route path="/register" element={<RegisterPages />} />
        </Route>
        <Route path="/" element={<PrivateRoute login={isLogin} />}>
          {/* if false */}
          <Route path="/homepage" element={<HomePages />} />
          <Route path="/detail-page/:id" element={<DetailPage />} />
          {/* <Route path="/logout" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
