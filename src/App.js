import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from 'component/loader';

import "./App.scss";
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import 'antd/dist/antd.min.css';


const Home = lazy(() => import("pages/home"));
const Login = lazy(() => import("pages/login"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Routes>
          <Route key={'login'} path="/login" element={<Login />} />
          <Route key={'default'} path="*" element={<Home />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
