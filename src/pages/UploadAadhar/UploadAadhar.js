import React, { useState } from "react";
import BackGroundImage from "../../components/backgroundImage/BackGroundImage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import BackButton from "../backButton/BackButton";
import DragDrop from "../fileDragandDrop/DragAndDrop";
import UploadButton from "../uploadButton/UploadButton";
import "./uploadaadhar.css";

const UploadAadhar = ({ title1, title2 }) => {
  const [file1, setFile1] = useState(null);
  const [Imagefile1, setImageFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [aadharFrontData, setAadharFrontData] = useState(null);
  const [aadharBackData, setAadharBackData] = useState(null);
  const [PanCardData, setPanCardData] = useState(null);

  const convertImageToText = async () => {
    var formData = new FormData();
    formData.append("file", Imagefile1);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "X-Api-Key": "YjhxqD4T43tSlpI+C59BlQ==ni2AMkEnAl70D96H",
      },
      body: formData,
    };
    fetch("https://0e31-122-170-176-6.in.ngrok.io/file-upload", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Response Data --> ", data);
        if (!data.data.data.Name) {
          return alert(data.data);
        }
        // const d = data.findIndex(
        //   (a) => a.text === "Male" || a.text === "Female"
        // );
        // const dobf = data.findIndex((a) => a.text.includes("DOB"));
        // setPanCardData({
        //   gender: data[d].text,
        //   no: `${data[d + 1].text} ${data[d + 2].text} ${data[d + 3].text}`,
        //   dob:
        //     data[dobf + 1].text === ":"
        //       ? data[dobf + 2].text
        //       : data[dobf + 1].text,
        // });
        setPanCardData({
          name: data.data.data?.Name,
          // gender: data[d].text,
          no: data.data.data?.PAN,
          dob: data.data.data?.["Date of Birth"],
          father: data.data.data?.["Father Name"],
        });
      });
  };

  const handleChange = (file) => {
    setImageFile1(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (r) => {
      setFile1(r.target.result);
    };
    console.log("file", reader);
  };

  const onSelect = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (r) => {
      setFile2(r.target.result);
    };
  };

  return (
    <div className="upload1">
      <Header />
      <BackButton />
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
                <div className="ocrDetail">
                  <div className="nameDetail">
                    {" "}
                    Name : <span className="nameValue">{""}</span>
                  </div>
                  <div className="nameDetail">
                    {" "}
                    DOB :{" "}
                    <span className="nameValue">{aadharFrontData?.dob}</span>
                  </div>
                  <div className="nameDetail">
                    {" "}
                    Gender :{" "}
                    <span className="nameValue">{aadharFrontData?.gender}</span>
                  </div>
                  {title1 === "Pan Card" ? (
                    <div className="nameDetail">
                      {" "}
                      Aadhar No. :{" "}
                      <span className="nameValue">{aadharFrontData?.no}</span>
                    </div>
                  ) : (
                    <div className="nameDetail">
                      {" "}
                      Pan No. :{" "}
                      <span className="nameValue">{aadharFrontData?.no}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
            {aadharBackData && (
              <div className="aadharCardDetail">
                <div className="ocrHeader">
                  <div className="ocrHeaderText">{title2 + " Detail"}</div>
                </div>
                <div className="ocrDetail">
                  <div className="nameDetail">
                    {" "}
                    Address :{" "}
                    <span className="nameValue">
                      {" "}
                      60, rani bagh main, khandwa road, limbodi, indore, madhya
                      pradesh - 452020{" "}
                    </span>
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
                      convertImageToText();
                    }}
                  />
                ) : null}
              </>
            ) : (
              <UploadButton
                onClick={() => {
                  convertImageToText();
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
