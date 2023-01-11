import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DownloadIcom from "../../assets/images/arrow-down.png";
import RightArrowIcon from "../../assets/images/arrow-right.png";
import BackGroundImage from "../../components/backgroundImage/BackGroundImage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainLoader from "../../components/Loader/Loader";
import DragDrop from "../fileDragandDrop/DragAndDrop";
import UploadButton from "../uploadButton/UploadButton";
import "./uploadaadhar.css";

const UploadAadhar = ({ title1, title2 }) => {
  var navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [file1, setFile1] = useState(null);
  const [Imagefile1, setImageFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [Imagefile2, setImageFile2] = useState(null);
  const [aadharFrontData, setAadharFrontData] = useState(null);
  const [aadharBackData, setAadharBackData] = useState(null);
  const [PanCardData, setPanCardData] = useState(null);

  const getAadharText = async () => {
    setLoader(true);
    var formData1 = new FormData();
    formData1.append("file", Imagefile1);
    const requestOptions1 = {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData1,
    };
    fetch(
      "https://devbankstatement.digisparsh.in:8000/upload_Aadhar_card_front/",
      requestOptions1
    )
      .then((response) => response.json())
      .then((data) => {
        setAadharFrontData({
          name: data?.name,
          gender: data?.Gender,
          no: data?.Aadhar,
          dob: data?.DOB,
        });
        setLoader(false);
      });
    var formData2 = new FormData();
    formData2.append("file", Imagefile2);
    const requestOptions2 = {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData2,
    };
    fetch(
      "https://devbankstatement.digisparsh.in:8000/upload_Aadhar_card_back/",
      requestOptions2
    )
      .then((response) => response.json())
      .then((data) => {
        setAadharBackData({
          no: data.Aadhar === null ? "" : data.Aadhar,
        });
      })
      .catch((e) => {
        setLoader(false);
        console.log("Error --> ", e);
      });
  };

  // const getAadharText2 = async () => {
  //   var formData1 = new FormData();
  //   formData1.append("file", Imagefile1);
  //   const requestOptions1 = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //     body: formData1,
  //   };
  //   fetch("https://1412-103-15-67-130.in.ngrok.io/qrAadhar", requestOptions1)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Data --> ", data);
  //     });
  // };

  const getPanText = async () => {
    setLoader(true);
    var formData = new FormData();
    formData.append("file", Imagefile1);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    };
    fetch(
      "https://devbankstatement.digisparsh.in:8000/upload_Pan_card/",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setPanCardData({
          name: data.name,
          no: data.Pan,
          dob: data.DOB,
          father: data.Fathers_name,
        });
        setLoader(false);
      });
  };

  const handleChange = (file) => {
    setImageFile1(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (r) => {
      setFile1(r.target.result);
    };
  };

  const onSelect = (file) => {
    setImageFile2(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (r) => {
      setFile2(r.target.result);
    };
  };

  const exportData = () => {
    let data;
    let fileName;
    if (aadharFrontData) {
      data = aadharFrontData;
      fileName = "Aadhar";
    } else {
      data = PanCardData;
      fileName = "PanCard";
    }
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${fileName}.json`;

    link.click();
  };

  return (
    <div className="upload1">
      {loader && <MainLoader />}
      <Header />
      <div className="rowButton">
        <div
          className="backBtnn"
          style={{ left: "40px" }}
          onClick={() => navigate(-1)}
        >
          <img alt="Right Icon" src={RightArrowIcon} />
          <button className="btnback">Back</button>
        </div>
        {((aadharFrontData && aadharFrontData?.no === aadharBackData?.no) ||
          PanCardData) && (
          <div className="downloadBtn">
            <img alt="Download icon" src={DownloadIcom} />
            <button className="btnDownload" onClick={()=>exportData()}>
              Download
            </button>
          </div>
        )}
      </div>
      <div className="uploadAadharContent">
        <div className="rowaadhar1">
          {title1 && (
            <div className="aadharCard">
              <div className="aadharText">{title1}</div>
              {file1 ? (
                <img height={300} alt="File 1" src={file1} />
              ) : (
                <div className="aadharBox">
                  <DragDrop onUpload={(e) => handleChange(e)} />
                </div>
              )}
            </div>
          )}

          {title2 && (
            <div className="aadharCard">
              <div className="aadharText">{title2}</div>
              {file2 ? (
                <img height={300} alt="File 2" src={file2} />
              ) : (
                <div className="aadharBox">
                  <DragDrop onUpload={(e) => onSelect(e)} />
                </div>
              )}
            </div>
          )}
          {title1 === "Pan Card" && (
            <div className="aadharCardDetail2">
              <div className="ocrHeader">
                <div className="ocrHeaderText">{title1 + " Detail"}</div>
              </div>

              <div className="ocrDetail">
                {PanCardData && (
                  <>
                    <div className="nameDetail">
                      {" "}
                      Name :{" "}
                      <span className="nameValue">{PanCardData?.name}</span>
                    </div>
                    <div className="nameDetail">
                      {" "}
                      Father's Name :{" "}
                      <span className="nameValue">{PanCardData?.father}</span>
                    </div>
                    <div className="nameDetail">
                      {" "}
                      DOB : <span className="nameValue">{PanCardData.dob}</span>
                    </div>
                    {/* <div className="nameDetail">
                    {" "}
                    Gender :{" "}
                    <span className="nameValue">{ImageData.gender}</span>
                  </div> */}
                    {
                      <div className="nameDetail">
                        {" "}
                        Card No. :{" "}
                        <span className="nameValue">{PanCardData.no}</span>
                      </div>
                    }
                    {/* <div className="nameDetail">
                  {" "}
                  Issued Date : <span className="nameValue"> 13-03-2012 </span>
                </div> */}
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/*Detail After OCR*/}
        {title1 === "Aadhar Front" && (
          <div className="rowaadhar1">
            {aadharFrontData && (
              <div className="aadharCardDetail">
                <div className="ocrHeader">
                  <div className="ocrHeaderText">{title1 + " Detail"}</div>
                </div>
                {aadharBackData?.no !== null &&
                aadharFrontData?.no === aadharBackData?.no ? (
                  <div className="ocrDetail">
                    <div className="nameDetail">
                      {" "}
                      Name :{" "}
                      <span className="nameValue">{aadharFrontData?.name}</span>
                    </div>
                    <div className="nameDetail">
                      {" "}
                      DOB :{" "}
                      <span className="nameValue">{aadharFrontData?.dob}</span>
                    </div>
                    <div className="nameDetail">
                      {" "}
                      Gender :{" "}
                      <span className="nameValue">
                        {aadharFrontData?.gender}
                      </span>
                    </div>

                    <div className="nameDetail">
                      {" "}
                      Aadhar No. :{" "}
                      <span className="nameValue">{aadharFrontData?.no}</span>
                    </div>
                  </div>
                ) : (
                  <div className="ocrDetail">
                    <div
                      className="nameDetail"
                      style={{ color: "#004C4C", fontSize: 20 }}
                    >
                      {"Aadhar Card not Validated"}
                    </div>
                    <div
                      className="nameDetail"
                      style={{ color: "#004C4C", fontSize: 14 }}
                    >
                      {"Note: Please Upload Correct Image"}
                    </div>
                  </div>
                )}
              </div>
            )}
            {aadharBackData &&
              aadharBackData?.no !== null &&
              aadharFrontData?.no === aadharBackData?.no && (
                <div className="aadharCardDetail">
                  <div className="ocrHeader">
                    <div className="ocrHeaderText">{title2 + " Detail"}</div>
                  </div>
                  <div className="ocrDetail">
                    <div className="nameDetail">
                      {" "}
                      Aadhar :{" "}
                      <span className="nameValue">{aadharBackData?.no}</span>
                    </div>
                  </div>
                </div>
              )}
          </div>
        )}
      </div>

      {/* Submit Button */}
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
            {title1 !== "Pan Card" ? (
              <>
                {file2 ? (
                  <UploadButton
                    onClick={() => {
                      getAadharText();
                    }}
                  />
                ) : null}
              </>
            ) : (
              <UploadButton
                onClick={() => {
                  getPanText();
                }}
              />
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
