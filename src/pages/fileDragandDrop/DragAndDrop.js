import React from "react";
import { FileUploader } from "react-drag-drop-files";
import uploadIcon from "../../assets/images/upload.png"
const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({onUpload}) {
    return (
        <FileUploader handleChange={(e)=>onUpload(e)}  name="file"  types={fileTypes} children={<><img alt="upload icon" src={uploadIcon} /><div className='uploadText' style={{textAlign:"Center"}}>Upload Photos Here</div></>} />
    );
}

export default DragDrop;