import React, { useState } from 'react'
import { HashRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import About from '../pages/About/About';
import BankDetail from '../pages/bankForm/BankDetail';
import BankForm from '../pages/bankForm/BankForm';
import PreviewAadhar from '../pages/previewAadhar/PreviewAadhar';
import UploadAadhar from '../pages/UploadAadhar/UploadAadhar';


const Routing = () => {
  const [file, setFiles] = useState(null);
  return (
    <Router>
        <Routes>
            <Route  exact path='/' element={<About />} />
            <Route  path='/uploadaadhar' element={<UploadAadhar setFiles={setFiles} />} />
            <Route  path='/pan' element={<UploadAadhar setFiles={setFiles} />} />
            <Route  path='/previewaadhar' element={<PreviewAadhar file={file} />} />
            <Route  path='/previewpan' element={<PreviewAadhar file={file} />} />
            <Route  path='/bankform' element={<BankForm />} />
            <Route  path='/bankdetail' element={<BankDetail />} />
            {/* <Route  path='*' element={<About />} />
          <Route  path='*' element={<About />} /> */}
          <Route  path='*'  element={<Navigate to={<About />} />} />
        </Routes>
    </Router>
  )
}

export default Routing
