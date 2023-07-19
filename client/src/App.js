import "./App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./component/account/Login";
import DataProvider from "./context/DataProvider";
import Home from "./component/home/Home";
import Header from "./component/header/Header";
import { useState } from "react";
const PrivateRoute = ({ isAuthenticate, ...props }) => {
  return isAuthenticate ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};
function App() {
  const [isAuthenticate, isUserAuthenticate] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ "margin-top": "64px" }}>
          <Routes>
            <Route
              path="/login"
              element={<Login isUserAuthenticate={isUserAuthenticate} />}
            />
            <Route
              path="/"
              element={<PrivateRoute isAuthenticate={isAuthenticate} />}
            >
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
