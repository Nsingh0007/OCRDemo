import React, { useState } from "react";
import BackGroundImage from "../../components/backgroundImage/BackGroundImage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import BackButton from "../backButton/BackButton";
import { FileUploader } from "react-drag-drop-files";
import "./bankForm.css";
import UploadButton from "../uploadButton/UploadButton";
import { useNavigate } from "react-router-dom";
import MainLoader from "../../components/Loader/Loader";
const BankForm = () => {
  var navigate = useNavigate();
  const fileTypes = ["PDF"];
  const [files, setFiles] = useState(null);
  const [bankName, setBankName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const getStatementAnalysis = async () => {
    setLoader(true);
    var body = new FormData();
    body.append("file", files);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body,
    };
    let path = "";
    if (password) {
      path = `https://devbankstatement.digisparsh.in:8000/Bank_statement_Analysis/?text=${bankName}&password=${password}`;
    } else {
      path = `https://devbankstatement.digisparsh.in:8000/Bank_statement_Analysis/?text=${bankName}`;
    }
    fetch(path, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        navigate("/bankdetail", {
          state: { KPI: data?.KPI, tableData: data?.extracted_data.splice(1) },
        });
      })
      .catch((e) => {
        setLoader(false);
        console.log("Error on Analysis Statement --> ", e);
      });
  };

  return (
    <div className="formDiv">
      {loader && <MainLoader />}
      <Header />
      <BackButton />
      <div className="bankFormMain">
        <div className="bankRow">
          <div className="bankCol">
            <div className="bankHeading">Bank Name</div>
            <input
              type="text"
              className="bankInput"
              placeholder="Bank Name"
              value={bankName}
              onChange={(e) => {
                setBankName(e.target.value);
              }}
            />
          </div>
          <div className="bankCol">
            <div className="bankHeading">Password</div>
            <input
              type="Password"
              className="bankInput"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="bankRow">
          <div className="bankCol">
            <div className="bankHeading">Bank Statement</div>
            <div className="bankInputFile">
              <div className="bankFile">
                <FileUploader
                  handleChange={(file) => {
                    setFiles(file);
                  }}
                  name="file"
                  types={fileTypes}
                  children={
                    <>
                      <div className="uploadText">Choose File</div>
                    </>
                  }
                />
              </div>
              <div className="uploadText">
                {files ? files.name : "No select File"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          marginRight: "18%",
          marginTop: 40,
        }}
      >
        {files && bankName !== "" ? (
          <UploadButton
            onClick={() => {
              getStatementAnalysis();
              // navigate("/bankdetail");
            }}
          />
        ) : null}
      </div>
      <BackGroundImage />
      <Footer />
    </div>
  );
};

export default BankForm;
