import React from "react";
import { useNavigate } from "react-router-dom";
import BackGroundImage from "../../components/backgroundImage/BackGroundImage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RightArrowIcon from "../../assets/images/arrow-right.png";
import DownloadIcom from "../../assets/images/arrow-down.png";
import "./bankDetail.css";
import TableComponent from "../table/Table";
const BankDetail = () => {
  var navigate = useNavigate();
  const cancel = () => {};

  const balanceData = [];
  for (let j = 0; j < 68; j++) {
    balanceData.push({
      ClosingBalance: 6814.1 + `${j}`,
      AverageBalance: 13058.0 + `${j}`,
    });
  }

  const originData = [];
  for (let i = 0; i < 100; i++) {
    originData.push({
      date: `22/07/2022`,
      narration:
        "UPI-rakesh babulal ganan-8424847649@ Y BL-SBIN0012703-130624266290-payment from phone",
      Chq_No: 13062422 + `${i}`,
      debit: 7000.0,
      credit: "Credit",
      balance: 8493.0 + `${i}`,
    });
  }

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
  return (
    <div className="Details">
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
            <div className="show">show</div>
            <select className="inputSelect">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <div className="show">entries</div>
          </div>
          <div className="paginationRow"></div>
        </div>
        <div className="tableRow">
          <div className="tableBox">
            <TableComponent
              TableData={mergedColumns}
              dataSub={originData}
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
                {balanceData.map((item) => {
                  console.log("item", item);
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
      </div>

      <BackGroundImage />
      <Footer />
    </div>
  );
};

export default BankDetail;
