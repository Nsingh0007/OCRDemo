import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import About from "../pages/About/About";
import BankDetail from "../pages/bankForm/BankDetail";
import BankForm from "../pages/bankForm/BankForm";
import UploadAadhar from "../pages/UploadAadhar/UploadAadhar";
import UploadResume from "../pages/UploadResume/UploadResume";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route
          path="/uploadaadhar"
          element={<UploadAadhar title1="Aadhar Front" title2="Aadhar Back" />}
        />
        <Route path="/pan" element={<UploadAadhar title1="Pan Card" />} />
        <Route path="/resume" element={<UploadResume />} />
        <Route path="/bankform" element={<BankForm />} />
        <Route path="/bankdetail" element={<BankDetail />} />
        <Route path="*" element={<Navigate to={<About />} />} />
      </Routes>
    </Router>
  );
};

export default Routing;
