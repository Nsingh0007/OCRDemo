import React from 'react'
import BackGroundImage from '../../components/backgroundImage/BackGroundImage'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import "./about.css"
import AboutImage from "../../assets/images/Rectangle2612.png"
import {useNavigate} from "react-router-dom"
const About = () => {
    const navigate = useNavigate();
    const goToUploadAadhar =()=>{
        navigate('/uploadaadhar')
    }
    return (
        <div className='about'>
            <Header />
            <div className='buttonBox'>
                <div className='btn1' >
                    <button onClick={()=>goToUploadAadhar()}>Upload Aadhar</button>
                </div>
                <div className='btn1' >
                    <button onClick={()=>navigate('/pan')}>Upload Pan</button>
                </div>
                <div className='btn2' >
                    <button onClick={()=>navigate('/bankform')}>Upload Bank Statement</button>
                </div>
            </div>
            <div className='aboutContent' >
                <div className='rowAbout'>
                    <div className='imgAbout'>
                        <img src={AboutImage} />
                    </div>
                    <div className='textAbout'>
                        <div className='headingAbout'>About  <span style={{color:"rgba(166, 29, 33, 1)"}}> OCR </span> </div>
                        <div className='aboutParagraph'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br/><br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                </div>
            </div>
            <BackGroundImage />
            <Footer />
        </div>
    )
}

export default About
