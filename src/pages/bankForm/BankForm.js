import React, { useState } from 'react'
import BackGroundImage from '../../components/backgroundImage/BackGroundImage'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import BackButton from '../backButton/BackButton'
import { FileUploader } from "react-drag-drop-files";
import "./bankForm.css"
import UploadButton from '../uploadButton/UploadButton'
import { useNavigate } from 'react-router-dom'
const BankForm = () => {
    var navigate = useNavigate();
    const fileTypes = ["PDF"];
    const [files, setFiles] = useState(null);
    const onUpload = (file) => {
        setFiles(file)
    }
    return (
        <div className='about'>
            <Header />
            <BackButton />
            <div className='bankFormMain'>
                <div className='bankRow'>
                    <div className='bankCol'>
                        <div className='bankHeading'>Bank Name</div>
                        <input type="text" className='bankInput' placeholder='Bank Name' />
                    </div>
                    <div className='bankCol'>
                        <div className='bankHeading'>Password</div>
                        <input type="text" className='bankInput' placeholder='Password' />
                    </div>
                </div>
                <div className='bankRow'>
                    <div className='bankCol'>
                        <div className='bankHeading'>Bank Statement</div>
                        <div className='bankInputFile'>
                            <div className='bankFile'>
                                <FileUploader handleChange={onUpload} name="file" types={fileTypes} children={<><div className='uploadText'>Choose File</div></>} />
                            </div>
                            <div className='uploadText'>{files ? (files.name):"No select File"}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: "flex",justifyContent: "flex-end", width: "100%",marginRight: "22%"}}>
                {files ?(<UploadButton onClick={() => navigate("/bankdetail")} />):null}
                       
            </div>
            <BackGroundImage />
            <Footer />
        </div>
    )
}

export default BankForm
