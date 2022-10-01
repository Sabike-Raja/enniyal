import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SideNav from "component/sidenav";
import Loader from 'component/loader';
import AppRoutes from 'constant/appRoutes'

const Dashboard = lazy(() => import("pages/dashboard"));
const Expances = lazy(() => import("pages/expances"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="d-flex">
        <SideNav />
        <Routes>
          <Route key={AppRoutes.dashboard} path={AppRoutes.dashboard} element={<Dashboard />} />
          <Route key={AppRoutes.expancess} path={AppRoutes.expancess} element={<Expances />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default Home;
