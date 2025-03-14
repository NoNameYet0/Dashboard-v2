import { Route, Routes } from "react-router-dom";

import { Layout } from "../routes/layout/layout.component";
import SignIn from "../routes/auth/sign-in.component";
import EnterEmail from "../routes/auth/enter-email.component";
import VerifyCode from "../routes/auth/verify-code.component";
import NewPassword from "../routes/auth/new-password.component";
import Home from "../routes/home/home.component";
import TraineeManagement from "../routes/trainee-management/trainee-management.component";
import EquipmentManagement from "../routes/equipment-management/equipment-management.component";
import SalesManagement from "../routes/sales-management/sales-management.component";
import ProgramsManagement from "../routes/programs-management/programs-management.component";
import StaffManagement from "../routes/staff-management/staff-management.component";
import ReportsAndAnalytics from "../routes/reports-and-analytics/reports-and-analytics.component";
import NotFound from "../routes/not-found/not-found.component";
import RequireAuth from "../routes/require-auth/require-auth.component";
import ProgramDetails from "../routes/program-details/program-details.component";
import ProgramgsPage from "../routes/programs-page/programs-page.component";
import EquipmentDetails from "../routes/equipment-details/equipment-details.component";
import ProductDetails from "../routes/product-details/product-details.component";
import SalesHistory from "../routes/sales-history/sales-history.component";
import TraineeDetails from "../routes/trainee-details/trainee-details.component";
import StaffDetails from "../routes/staff-details/staff-details.component";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="auth" element={<SignIn />} />
        <Route path="forget-password" element={<EnterEmail />} />
        <Route path="verify-code" element={<VerifyCode />} />
        <Route path="new-password" element={<NewPassword />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route index element={<Home />} />
          <Route path="trainees" element={<TraineeManagement />} />
          <Route path="trainees/:traineeID" element={<TraineeDetails />} />
          <Route
            path="equipment/:equipmentPage"
            element={<EquipmentManagement />}
          />
          <Route
            path="equipmentDetails/:equipmentId"
            element={<EquipmentDetails />}
          />
          <Route path="sales/:salesPage" element={<SalesManagement />} />
          <Route path="salesHistory" element={<SalesHistory />} />
          <Route
            path="productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route element={<ProgramsManagement />}>
            <Route path="programs/:programsPage" element={<ProgramgsPage />} />
          </Route>
          <Route
            path="programsDetails/:programName"
            element={<ProgramDetails />}
          />
          <Route path="staff" element={<StaffManagement />} />
          <Route path="staff/:staffId" element={<StaffDetails />} />
          <Route path="reports" element={<ReportsAndAnalytics />} />
        </Route>
      </Route>
      {/* catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
