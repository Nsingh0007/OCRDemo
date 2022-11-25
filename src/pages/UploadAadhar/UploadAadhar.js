import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackGroundImage from "../../components/backgroundImage/BackGroundImage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import BackButton from "../backButton/BackButton";
import DragDrop from "../fileDragandDrop/DragAndDrop";
import UploadButton from "../uploadButton/UploadButton";
import "./uploadaadhar.css";

const UploadAadhar = ({ setFiles }) => {
  var navigate = useNavigate();
  var location = useLocation();
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const [labelName, setLabelName] = useState("");

  const handleChange = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (r) => {
      console.log("file read --> ", r);
      setFile1(r.target.result);
    };
    console.log("file", reader);
  };

  const onSelect = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (r) => {
      console.log("file read --> ", r);
      setFile2(r.target.result);
    };
  };

  useEffect(() => {
    if (location.pathname === "/uploadaadhar") {
      setLabelName("Aadhar Front");
    } else {
      setLabelName("Pan card");
    }
  }, [location.pathname]);

  return (
    <div className="about">
      <Header />
      <BackButton />
      <div className="uploadAadharContent">
        <div className="rowaadhar">
          <div className="frontAadhar">
            {file1 ? (
              <>
                <div className="aadharText">{labelName}</div>
                <img alt="File 1" src={file1} />
              </>
            ) : (
              <>
                <div className="aadharText">{labelName}</div>
                <div className="aadharBox">
                  <DragDrop onUpload={(e) => handleChange(e)} />
                </div>
              </>
            )}
          </div>
          <div className="frontAadhar">
            {labelName === "Aadhar Front" && (
              <>
                {file2 ? (
                  <>
                    <div className="aadharText">Aadhar Back</div>
                    <img alt="File 2" src={file2} />
                  </>
                ) : (
                  <>
                    <div className="aadharText">Aadhar Back</div>
                    <div className="aadharBox">
                      <DragDrop onUpload={onSelect} />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          marginRight: "22%",
        }}
      >
        {file1 ? (
          <>
            {labelName === "Aadhar Front" ? (
              <>
                {file2 ? (
                  <UploadButton onClick={() => navigate("/previewaadhar")} />
                ) : null}
              </>
            ) : (
              <UploadButton onClick={() => navigate("/previewpan")} />
            )}
          </>
        ) : null}
      </div>
      <BackGroundImage />
      <Footer />
    </div>
  );
};

export default UploadAadhar;
