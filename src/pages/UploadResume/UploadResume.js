import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import DownloadIcom from "../../assets/images/arrow-down.png";
import RightArrowIcon from "../../assets/images/arrow-right.png";
import BackGroundImage from "../../components/backgroundImage/BackGroundImage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainLoader from "../../components/Loader/Loader";
import DragDrop from "../fileDragandDrop/DragAndDrop";
import UploadButton from "../uploadButton/UploadButton";
import "./Uploadresume.css";
import { Document, Page, pdfjs } from 'react-pdf';
const UploadResume = () => {
    var navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [PDFImage, setPDFImage] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [resumeData, setResumeData] = useState(null);
    const [PDFData, setPdfData] = useState(null);

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const getResumeText = () => {
        setLoader(true);
        const form = new FormData();
        // form.append('file', new File([pdfUrl], PDFData?.files[0].name))
        form.append('file', PDFData)
        // form.append('file', new File([pdfUrl], '5_.pdf'));
        fetch('https://emossyparser.emossy.com:8000/upload_file/',
            {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    // 'Content-Type': "application/pdf"
                },
                body: form
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("data--->", data);
                setResumeData(data);
                setLoader(false);
            });
    }
    const handleChange = (file) => {
        debugger;
        //    var inputBox =   document.getElementsByTagName('input');
        var inputBox = document.querySelector('input[type="file"]');
        console.log("inputBox", file);
        setPdfData(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (r) => {
            setPdfUrl(r.target.result);
            console.log("r.target.result", r.target.result)
        };
    };
    let Pdf = {};
    useEffect(() => {
        if (pdfUrl) {
            pdfjs.getDocument(pdfUrl).promise.then(pdf => {
                const pages = [];
                Pdf = pdf;
                getPage(1).then(result => {
                    setPDFImage(result);
                });
            })
        }
    }, [pdfUrl])

    const getPage = (num) => {
        return new Promise((resolve, reject) => {
            Pdf.getPage(num).then(page => {
                const scale = "1.5";
                const viewport = page.getViewport({
                    scale: scale
                });
                const canvas = document.createElement('canvas');
                const canvasContext = canvas.getContext('2d');
                canvas.height = viewport.height || viewport.viewBox[3]; /* viewport.height is NaN */
                canvas.width = viewport.width || viewport.viewBox[2];  /* viewport.width is also NaN */
                page.render({
                    canvasContext, viewport
                }).promise.then((res) => {
                    resolve(canvas.toDataURL());
                })
            })
        })
    }

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
            </div>
            <div className="uploadAadharContent">
                <div className="rowaadhar1">
                    <div className="aadharCard">
                        <div className="aadharText">Resume Parser</div>
                        {pdfUrl ? (
                            <div>
                                <img height={327} alt="File 1" src={PDFImage} />
                            </div>
                        ) : (
                            <div className="aadharBox" style={{ width: "50%" }}>
                                <DragDrop onUpload={(e) => handleChange(e)} />
                            </div>
                        )}
                    </div>

                    {/*Detail After OCR of Resume*/}
                    {resumeData && (
                        <div style={{ display: "flex", flexWrap: "wrap",width:"69%" }} >
                            <div className="aadharCardDetail2" style={{ width: "35%", minHeight: "15.583vh" }}>
                                <div className="ocrHeader">
                                    <div className="ocrHeaderText">Personal detail</div>
                                </div>

                                <div className="ocrDetail">
                                    <>
                                        <div className="nameDetail">
                                            {" "}
                                            Name :{" "}
                                            <span className="nameValue">{resumeData?.Name}</span>
                                        </div>
                                        <div className="nameDetail">
                                            {" "}
                                            DOB : <span className="nameValue">{resumeData?.DOB[0]}</span>
                                        </div>
                                        <div className="nameDetail">
                                            {" "}
                                            Designation : <span className="nameValue"></span>
                                        </div>
                                    </>
                                </div>
                            </div>
                            <div className="aadharCardDetail2" style={{ width: "35%", minHeight: "15.583vh" }}>
                                <div className="ocrHeader">
                                    <div className="ocrHeaderText">Contact detail</div>
                                </div>

                                <div className="ocrDetail">
                                    <>
                                        <div className="nameDetail">
                                            {" "}
                                            Mobile Number :{" "}
                                            <span className="nameValue">{resumeData?.Mobile_Number}</span>
                                        </div>
                                        <div className="nameDetail">
                                            {" "}
                                            Email Address : <span className="nameValue">{resumeData?.E_mail}</span>
                                        </div>
                                        <div className="nameDetail">
                                            {" "}
                                            Address : <span className="nameValue"></span>
                                        </div>
                                    </>
                                </div>
                            </div>
                            <div className="aadharCardDetail2" style={{ width: "35%", minHeight: "15.583vh" }}>
                                <div className="ocrHeader">
                                    <div className="ocrHeaderText">Education</div>
                                </div>

                                <div className="ocrDetail">
                                    <>
                                        <div className="nameDetail">
                                            {" "}
                                            Degree :{" "}
                                            <span className="nameValue">{Object.keys(resumeData?.education)[0]}</span>
                                        </div>
                                        <div className="nameDetail">
                                            {" "}
                                            University: <span className="nameValue"></span>
                                        </div>
                                        <div className="nameDetail">
                                            {" "}
                                            Year : <span className="nameValue">{Object.values(resumeData?.education)[0]}</span>
                                        </div>
                                    </>
                                </div>
                            </div>
                            <div className="aadharCardDetail2" style={{ width: "35%", minHeight: "15.583vh" }}>
                                <div className="ocrHeader">
                                    <div className="ocrHeaderText">Experience</div>
                                </div>

                                <div className="ocrDetail">
                                    <>
                                        <div className="nameDetail">
                                            {" "}
                                            Role :{" "}
                                            <span className="nameValue"></span>
                                        </div>
                                        <div className="nameDetail">
                                            {" "}
                                            Company Name: <span className="nameValue"></span>
                                        </div>
                                        <div className="nameDetail">
                                            {" "}
                                            Date : <span className="nameValue">{resumeData?.experience}</span>
                                        </div>
                                    </>
                                </div>
                            </div>
                            <div className="aadharCardDetail2" style={{ width: "35%", minHeight: "15.583vh" }}>
                                <div className="ocrHeader">
                                    <div className="ocrHeaderText">Skills</div>
                                </div>

                                <div className="ocrDetail" style={{flexWrap:"wrap"}}>
                                    <>
                                        {resumeData.skills.map((item) => (
                                            <div className="nameDetail">
                                                {/* {" "}
                                            Role :{" "} */}
                                                <span className="nameValue">{item}</span>
                                            </div>
                                        ))}
                                    </>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

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
                {pdfUrl && (<>
                    <UploadButton
                        onClick={() => {
                            getResumeText();
                        }}
                    />
                </>)}
            </div>
            <BackGroundImage />
            <Footer />
        </div >
    )
}

export default UploadResume
