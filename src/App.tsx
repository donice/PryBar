import { useState } from "react";
import AuthInput from "./components/Input/AuthInput";
import DashboardButton from "./components/buttons/DashboardButton";
import DashboardInput from "./components/Input/DashboardInput";
import Modal from "./components/Modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import WebsiteLayout from "./layouts/WebsiteLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App font-primary">
        <Modal>
          <div className="w-[30vw] h-[30vh]">hello</div>
        </Modal>
        <DashboardButton text="Add a Dog" />
        <AuthInput
          text="Name"
          placeholder="Enter Name"
          type="text"
          value={""}
          name={"name"}
        />
        <DashboardInput
          text="Name"
          placeholder="Enter Name"
          type="text"
          value={""}
          name={"name"}
        />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>


      <Routes>
        <Route element={<AuthLayout />}>
          {/* <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/confirm-email" element={<ConfirmEmail />} />
          
          <Route
            path="/auth/reset-password/:uid/:token"
            element={<ResetPassword />}
          />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          */}
        </Route>

        <Route element={<DashboardLayout />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          
        </Route>

        <Route element={<WebsiteLayout />}>
          {/* <Route path="/" element={<Website />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
