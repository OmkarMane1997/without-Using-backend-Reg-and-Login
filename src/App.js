import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Movie from "./components/Movie";
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";
import Company from "./components/Company";
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Menu />
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/Registration"} element={<Registration />} />
          <Route path={"/Movie"} element={<Movie />} />
          <Route path={"/Company"} element={<Company />} />
          <Route path={"/*"} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
