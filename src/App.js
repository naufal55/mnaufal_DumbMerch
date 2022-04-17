import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavbar from "./Component/MainNavbar";
import { PrivateOut, PrivateRoute } from "./Component/PrivateRoute";
import { HomePages,LoginPages, NotFound, RegisterPages } from "./Pages";

function App() {
const isLogin = false

  return (
    <BrowserRouter>
    {isLogin?<MainNavbar/>:''}
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<PrivateOut login={isLogin}/>}> {/* if false */}
        <Route path="/" element={<LoginPages />} />
          <Route path="/login" element={<LoginPages />} /> 
          <Route path="/register" element={<RegisterPages />} />
        </Route>
        <Route path="/" element={<PrivateRoute login={isLogin}/>}> {/* if false */}
          <Route path="/homepage" element={<HomePages />} />
          <Route path="/a" element={<HomePages />} />
          <Route path="/b" element={<HomePages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
