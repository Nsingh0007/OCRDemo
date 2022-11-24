import React, { StrictMode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackGroundImage from '../../components/backgroundImage/BackGroundImage'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import RightArrowIcon from "../../assets/images/arrow-right.png"
import DownloadIcom from "../../assets/images/arrow-down.png"
import "./bankDetail.css"
import TableComponent from '../table/Table'
import { RecentActors } from '@mui/icons-material'
const BankDetail = () => {
    var navigate = useNavigate();
    const [editingKey, setEditingKey] = useState('');

    const cancel = () => {
        setEditingKey('');
    };
    var Item = {
        date: "",
        narration:"",
        // Chq_No: 0,
        debit:0,
        credit:"",
        balance:0
    }

    const originData = Item = [];
    for (let i = 0; i < 100; i++) {
        originData.push({
            date: `22/07/2022`,
            narration:"UPI-rakesh babulal ganan-8424847649@ Y BL-SBIN0012703-130624266290-payment from phone",
            // Chq_No: 000013062422 + {i},
            debit: 7000.00,
            credit:"Credit",
            balance:8493.00 + {i}
        });
    }

    const columns = [
        {
            title: 'Date',
            dataIndex: 'Date',
            width: '100px',
            editable: true,
        },
        {
            title: 'Narration',
            dataIndex: 'Narration',
            width: '100px',
            editable: true,
        },
        {
            title: 'Chq./Ref. No.',
            dataIndex: 'Chq./Ref. No.',
            width: '100px',
            editable: true,
        },
        {
            title: 'Debit',
            dataIndex: 'Debit',
            width: '100px',
            editable: true,
        },
        {
            title: 'Credit',
            dataIndex: 'Credit',
            width: '100px',
            editable: true,
        },
        {
            title: 'Balance',
            dataIndex: 'Balance',
            width: '100px',
            editable: true,
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            // onCell: (record: Item) => ({
            //   record,
            //   inputType: col.dataIndex === 'age' ? 'number' : 'text',
            //   dataIndex: col.dataIndex,
            //   title: col.title,
            //   editing: isEditing(record),
            // }),
        };
    });
    return (
        <div className='about'>
            <Header />
            <div className='rowButton'>
                <div className='backBtn' style={{ left: "40px" }} onClick={() => navigate(-1)} >
                    <img src={RightArrowIcon} />
                    <button className='btnback'>
                        Back
                    </button>
                </div>
                <div className='downloadBtn'>
                    <img src={DownloadIcom} />
                    <button className='btnDownload'>
                        Download
                    </button>
                </div>
            </div>
            <div className='transaction'>
                <div className='headerRow'>
                    <div className='headingName'>
                        Transaction
                    </div>
                    <div className='headingName'>
                        KPI
                    </div>
                </div>
                <div className='pagination'>
                    <div className='paginationRow'>
                        <div className='show'>show</div>
                        <select className='inputSelect' >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <div className='show'>entries</div>
                    </div>
                    <div className='paginationRow'></div>
                </div>
                <div className='tableRow'>
                    <div className='tableBox'>
                        <TableComponent TableData={mergedColumns} dataSub={originData} onClick={cancel} />
                    </div>
                    <div className='tableBox'></div>
                </div>
            </div>


            <BackGroundImage />
            <Footer />
        </div>
    )
}

export default BankDetail
