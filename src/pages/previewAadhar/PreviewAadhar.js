import React, { useEffect, useState } from 'react'
import BackGroundImage from '../../components/backgroundImage/BackGroundImage'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import BackButton from '../backButton/BackButton'
import frontAadhar from "../../assets/images/aadharfront.png"
import Pan from "../../assets/images/pan.png"
import backAadhar from "../../assets/images/aadharBack.png"
import "./previewAadhar.css"
import { useLocation } from 'react-router-dom'

const PreviewAadhar = (file) => {

    var location = useLocation();
    const [labelName, setLabelName] = useState("");
    useEffect(() => {
        if (location.pathname === "/previewaadhar") {
            setLabelName("Aadhar Front");
        }
        else {
            setLabelName("Pan card");
        }
    }, [location.pathname])
    return (
        <div>
            <div className='about'>
                <Header />
                <BackButton />
                <div className='uploadAadharContent'>
                    <div className='rowaadhar'>
                        <div className='frontAadhar'>
                            <div className='aadharText'>{labelName}</div>
                            <div className='aadharBox'>
                                <img alt='Aadhar Front' src={ labelName === "Aadhar Front" ?frontAadhar :Pan} />
                                {/* <div className='uploadText'>Upload Photos Here</div> */}
                            </div>
                        </div>
                        {labelName === "Aadhar Front" ? (
                            <>
                                <div className='frontAadhar'>
                                    <div className='aadharText'>Aadhar Back</div>
                                    <div className='aadharBox'>
                                        <img alt='Aadhar Back' src={backAadhar} />
                                        {/* <div className='uploadText'>Upload Photos Here</div> */}
                                    </div>
                                </div>
                            </>) : (<>
                                <div className='frontAadhar'>
                                    <div style={{ height: "20px" }}></div>
                                    <div className='ocrAadhar'>
                                        <div className='ocrHeader'>
                                            <div className='ocrHeaderText'>{labelName}</div>
                                        </div>
                                        <div className='ocrDetail'>
                                            <div className='nameDetail'> Name : <span className='nameValue'> Ayushman Jha </span></div>
                                            <div className='nameDetail'> DOB  : <span className='nameValue'> 11-02-2001 </span></div>
                                            <div className='nameDetail'> Gender : <span className='nameValue'> Male </span></div>
                                            <div className='nameDetail'> Aadhar No. : <span className='nameValue'> 8173  9764  9879 </span></div>
                                            <div className='nameDetail'> Issued Date : <span className='nameValue'> 13-03-2012 </span></div>
                                        </div>
                                    </div>
                                </div>
                            </>)}

                    </div>
                    {labelName === "Aadhar Front" && (<>
                        <div className='rowaadhar'>
                            <div className='ocrAadhar'>
                                <div className='ocrHeader'>
                                    <div className='ocrHeaderText'>Adhar Front Detail </div>
                                </div>
                                <div className='ocrDetail'>
                                    <div className='nameDetail'> Name : <span className='nameValue'> Ayushman Jha </span></div>
                                    <div className='nameDetail'> DOB  : <span className='nameValue'> 11-02-2001 </span></div>
                                    <div className='nameDetail'> Gender : <span className='nameValue'> Male </span></div>
                                    <div className='nameDetail'> Aadhar No. : <span className='nameValue'> 8173  9764  9879 </span></div>
                                    <div className='nameDetail'> Issued Date : <span className='nameValue'> 13-03-2012 </span></div>
                                </div>
                            </div>
                            <div className='ocrAadhar'>
                                <div className='ocrHeader'>
                                    <div className='ocrHeaderText'>Adhar Back Detail </div>
                                </div>
                                <div className='ocrDetail'>
                                    <div className='nameDetail'> Address : <span className='nameValue'> 60, rani bagh main, khandwa road, limbodi, indore, madhya pradesh - 452020 </span></div>
                                </div>
                            </div>
                        </div>
                    </>)}

                </div>
                <BackGroundImage />
                <Footer />
            </div>
        </div>
    )
}

export default PreviewAadhar
