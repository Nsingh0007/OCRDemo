import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackGroundImage from "../../components/backgroundImage/BackGroundImage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RightArrowIcon from "../../assets/images/arrow-right.png";
import DownloadIcom from "../../assets/images/arrow-down.png";
import "./bankDetail.css";
import TableComponent from "../table/Table";
import PaginationComponent from "../Pagination/Pagination";
import { AverageBalanceData, BalanceData } from "../DummyData/Dummydata";

const BankDetail = () => {
    var navigate = useNavigate();
    const cancel = () => { };
    const [page, setPage] = React.useState(1);
    const [fieldsData, setfieldsData] = React.useState([]);
    const [AverageData, setAverageData] = React.useState([])
    const [countPerPage, setcountPerPage] = React.useState(0);
    const [paginationStartIndex, setpaginationStartIndex] = React.useState(1);
    const [paginationEndIndex, setpaginationEndIndex] = React.useState(1);
    const [TransactionData, setTransactionData] = React.useState(BalanceData);
    const [AccountBalance, setAccountBalance] = React.useState(AverageBalanceData);
    const [PerPage, setPerPage] = React.useState(10);
    const balanceData = [];
    const originData = [];


    useEffect(() => {
        if (TransactionData.length > 0) {
            const data = getPaginatedData(TransactionData);
            const data2 = getPaginatedData(AccountBalance);
            setcountPerPage(data.length);
            console.log("count", data.length)
            var pageIndex = page - 1;
            var fieldss = data[pageIndex];
            console.log("fieldss---->", fieldss)
            var avg = data2[pageIndex];
            setfieldsData(fieldss);
            setAverageData(avg);
        }
    }, [page,PerPage])

    const getPaginatedData = (field) => {
        var splicedArray = [];
        const startIndex = page * PerPage - PerPage;
        setpaginationStartIndex(startIndex + 1);
        const endIndex = parseInt(startIndex) + parseInt(PerPage);
        setpaginationEndIndex(endIndex)
        const count = Math.ceil(field.length / PerPage);
        for (let index = 0; index < count; index++) {
            var value = field.slice(startIndex, endIndex);
            splicedArray.push(value);
        };
        return splicedArray;
    };
    const columns = [
        {
            title: "Date",
            dataIndex: "Date",
            width: "129.2px",
            editable: true,
        },
        {
            title: "Narration",
            dataIndex: "Narration",
            width: "327px",
            editable: true,
        },
        {
            title: "Chq./Ref. No.",
            dataIndex: "Chq./Ref. No.",
            width: "129.2px",
            editable: true,
        },
        {
            title: "Debit",
            dataIndex: "Debit",
            width: "129.2px",
            editable: true,
        },
        {
            title: "Credit",
            dataIndex: "Credit",
            width: "129.2px",
            editable: true,
        },
        {
            title: "Balance",
            dataIndex: "Balance",
            width: "129.2px",
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

    const PageChange = (event, value) => {
        setPage(value);
    };
    return (
        <div className="about">
            <Header />
            <div className="rowButton">
                <div
                    className="backBtn"
                    style={{ marginLeft: "6%" }}
                    onClick={() => navigate(-1)}
                >
                    <img alt="Right Icon" src={RightArrowIcon} />
                    <button className="btnback">Back</button>
                </div>
                <div className="downloadBtn">
                    <img alt="Download icon" src={DownloadIcom} />
                    <button className="btnDownload">Download</button>
                </div>
            </div>
            <div className="transaction">
                <div className="headerRow">
                    <div className="headingName" style={{ width: "80%" }}>
                        Transaction
                    </div>
                    <div className="headingName" style={{ width: "23%" }}>
                        KPI
                    </div>
                </div>
                <div className="pagination">
                    <div className="paginationRow">
                        <div className="show">Show</div>
                        <select className="inputSelect" onChange={(e)=>{setPerPage(e.target.value)}}>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                        <div className="show">entries</div>
                    </div>
                    <div className="paginationRow"></div>
                </div>
                <div className="tableRow">
                    <div className="tableBox">
                        <TableComponent
                            TableData={mergedColumns}
                            dataSub={fieldsData}
                            onClick={cancel}
                        />
                    </div>
                    <div className="tableBox">
                        <table>
                            <thead>
                                <tr style={{ padding: "0px", gap: "2px" }}>
                                    <th
                                        className="tableHead"
                                        style={{
                                            width: "142.5px",
                                            background: "#E7E7E7",
                                            border: "1px solid #E7E7E7",
                                        }}
                                    >
                                        Opening Balance
                                    </th>
                                    <th className="tableRowValue" style={{ width: "142.5px" }}>
                                        {" "}
                                        <div className="rowItem">15493.00</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {AverageData.map((item) => {
                                    return (
                                        <>
                                            {item.AverageBalance && (
                                                <>
                                                    <tr style={{ padding: "0px", gap: "2px" }}>
                                                        <td
                                                            className="tableHead"
                                                            style={{
                                                                width: "142.5px",
                                                                background: "#E7E7E7",
                                                                border: "1px solid #E7E7E7",
                                                                height: "48px"
                                                            }}
                                                        >
                                                            {" "}
                                                            <div className="rowItem">Average Balance</div>
                                                        </td>
                                                        <td className="tableRowValue">
                                                            <div className="rowItem">
                                                                {item.AverageBalance}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            )}

                                            {item.ClosingBalance && (
                                                <>
                                                    <tr style={{ padding: "0px", gap: "2px" }}>
                                                        <td
                                                            className="tableHead"
                                                            style={{
                                                                width: "142.5px",
                                                                background: "#E7E7E7",
                                                                border: "1px solid #E7E7E7",
                                                                height: "48px"
                                                            }}
                                                        >
                                                            {" "}
                                                            <div className="rowItem">Closing Balance</div>
                                                        </td>
                                                        <td className="tableRowValue">
                                                            <div className="rowItem">
                                                                {item.ClosingBalance}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            )}
                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="paginationFooterRow">
                    <div className="paginationDetail">
                        Showing {paginationStartIndex} to {paginationEndIndex} of {TransactionData.length} entries
                    </div>
                    <PaginationComponent page={page} counts={countPerPage} onClick={(event, value) => PageChange(event, value)} />
                </div>
            </div>

            <BackGroundImage />
            <Footer />
        </div>
    );
};

export default BankDetail;
