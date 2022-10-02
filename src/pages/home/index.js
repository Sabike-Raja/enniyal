import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SideNav from "component/sidenav";
import Loader from "component/loader";
import AppRoutes from "constant/appRoutes";

const Dashboard = lazy(() => import("pages/dashboard"));
const CreateProformaInvoice = lazy(() => import("pages/createproformainvoice"));
const CreatePayInvoice = lazy(() => import("pages/createpayinvoice"));
const ViewProformaInvoice = lazy(() => import("pages/viewproformainvoice"));
const ViewPayInvoice = lazy(() => import("pages/viewpayinvoice"));
const ViewInvoice = lazy(() => import("pages/viewinvoice"));
const Client = lazy(() => import("pages/client"));
const Vendor = lazy(() => import("pages/vendor"));
const Viewemployee = lazy(() => import("pages/viewemployee"));
const Designation = lazy(() => import("pages/designation"));
const Employeeid = lazy(() => import("pages/employeeid"));
const Expances = lazy(() => import("pages/expances"));
const PaySlip = lazy(() => import("pages/payslip"));
const TakeAttadance = lazy(() => import("pages/takeattadance"));
const ViewAttadance = lazy(() => import("pages/viewattadance"));
const Settings = lazy(() => import("pages/settings"));
const Profile = lazy(() => import("pages/profile"));

const Home = () => {
  return (
    <div className="d-flex">
      <SideNav />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            key={AppRoutes.dashboard}
            path={AppRoutes.dashboard}
            element={<Dashboard />}
          />
          <Route
            key={AppRoutes.expancess}
            path={AppRoutes.expancess}
            element={<Expances />}
          />
          <Route
            key={AppRoutes.client}
            path={AppRoutes.client}
            element={<Client />}
          />
          <Route
            key={AppRoutes.vendor}
            path={AppRoutes.vendor}
            element={<Vendor />}
          />
          <Route
            key={AppRoutes.viewemployee}
            path={AppRoutes.viewemployee}
            element={<Viewemployee />}
          />
          <Route
            key={AppRoutes.designation}
            path={AppRoutes.designation}
            element={<Designation />}
          />
          <Route
            key={AppRoutes.employeeid}
            path={AppRoutes.employeeid}
            element={<Employeeid />}
          />
          <Route
            key={AppRoutes.createproformainvoice}
            path={AppRoutes.createproformainvoice}
            element={<CreateProformaInvoice />}
          />
          <Route
            key={AppRoutes.createpayinvoice}
            path={AppRoutes.createpayinvoice}
            element={<CreatePayInvoice />}
          />
          <Route
            key={AppRoutes.viewproformainvoice}
            path={AppRoutes.viewproformainvoice}
            element={<ViewProformaInvoice />}
          />
          <Route
            key={AppRoutes.viewpayinvoice}
            path={AppRoutes.viewpayinvoice}
            element={<ViewPayInvoice />}
          />
          <Route
            key={AppRoutes.viewinvoice}
            path={AppRoutes.viewinvoice}
            element={<ViewInvoice />}
          />
          <Route
            key={AppRoutes.settings}
            path={AppRoutes.settings}
            element={<Settings />}
          />
          <Route
            key={AppRoutes.takeattadance}
            path={AppRoutes.takeattadance}
            element={<TakeAttadance />}
          />
          <Route
            key={AppRoutes.viewattadance}
            path={AppRoutes.viewattadance}
            element={<ViewAttadance />}
          />
          <Route
            key={AppRoutes.payslip}
            path={AppRoutes.payslip}
            element={<PaySlip />}
          />
          <Route
            key={AppRoutes.profile}
            path={AppRoutes.profile}
            element={<Profile />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Home;
