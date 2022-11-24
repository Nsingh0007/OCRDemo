import React from 'react'
import "./backButton.css"
import RightArrowIcon from "../../assets/images/arrow-right.png"
import {useNavigate} from "react-router-dom"

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <div className='backBtn' onClick={() => navigate(-1)} >
            <img src={RightArrowIcon} />
            <button className='btnback'>
                Back
            </button>
        </div>
    )
}

export default BackButton
