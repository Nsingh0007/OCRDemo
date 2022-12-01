import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackGroundImage from "../../components/backgroundImage/BackGroundImage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RightArrowIcon from "../../assets/images/arrow-right.png";
import DownloadIcom from "../../assets/images/arrow-down.png";
import "./bankDetail.css";
import TableComponent from "../table/Table";
const BankDetail = () => {
  var navigate = useNavigate();
  const location = useLocation();
  // const { tableData } = location?.state;

  const cancel = () => {};

  const d = [
    { key: "Ac holder name", value: "A/c Holder Name" },
    { key: "bank name", value: "Bank Name" },
    { key: "opening_balance", value: "Opening Balance" },
    { key: "closing_balance", value: "Closing Balance" },
    { key: "average_balance", value: "Average Balance" },
    { key: "credit_sum", value: "Credit Sum" },
    { key: "debit_sum", value: "Debit Sum" },
    { key: "debit_to_credit_ratio", value: "Debit to Credit Ratio" },
    { key: "eod", value: "EOD" },
    { key: "very_high_credit", value: "Very High Credit" },
    { key: "very_high_debit", value: "Very High Debit" },
    { key: "account number", value: "A/C Number" },
    { key: "start end date", value: "Start End Date" },
    { key: "post_salary_payout", value: "Post Salary Payout" },
    { key: "three_month_debit_average", value: "3 month Debit Avg." },
    { key: "three_month_credit_average", value: "3 month Credit Avg." },
    { key: "three_month_debit_to_credit_ratio", value: "3 month Debit to Credit Ratio" },
    { key: "three_month_avg_balance", value: "3 month Avg. Balance" },
    { key: "identical_debit_credit", value: "Identical Debit Credit" },
    { key: "highest_balance", value: "Highest Balance" },
    { key: "lowest_balance", value: "Lowest Balance" },
    { key: "heighest_debits", value: "Highest Debit" },
    { key: "heighest_credits", value: "Highest Credit" },
    { key: "highest_credit_balance", value: "Highest Credit Balance" },
    { key: "highest_debit_balance", value: "Highest Debit Balance" },
    { key: "amount_tallying_inconsistancy", value: "Amount tallying Inconsistency" },
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
    },
    {
      title: "Narration",
      dataIndex: "Narration",
    },
    {
      title: "Chq./Ref. No.",
      dataIndex: "Chq./Ref. No.",
    },
    {
      title: "Debit",
      dataIndex: "Debit",
    },
    {
      title: "Credit",
      dataIndex: "Credit",
    },
    {
      title: "Balance",
      dataIndex: "Balance",
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
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
        <div>
          <div className="headingName" style={{ width: "80%" }}>
            KPI
          </div>
          <div className="kpiRow">
            {d?.map((item) => {
              return (
                <div className="kpiCard">
                  <p className="kpiLabel">{item.value}</p>
                  {location?.state !== null && typeof location?.state?.KPI?.[`${item.key}`] === "string" ? (
                    <p className="kpiValue">
                      {location?.state?.KPI?.[`${item.key}`]}
                    </p>
                  ) : (
                    location?.state && <p className="kpiValue">
                      {Object.keys(location?.state?.KPI?.[`${item.key}`])[0] +
                        " --> " +
                        Object.values(location?.state?.KPI?.[`${item.key}`])[0]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="headerRow">
          <div className="headingName" style={{ width: "80%" }}>
            Transaction
          </div>
        </div>
        <div className="pagination">
          <div className="paginationRow">
            <div className="show">show</div>
            <select className="inputSelect">
              <option value="1">10</option>
              <option value="2">20</option>
              <option value="3">30</option>
            </select>
            <div className="show">entries</div>
          </div>
          <div className="paginationRow"></div>
        </div>
        <div className="tableBox">
          <TableComponent
            TableData={mergedColumns}
            dataSub={
              location?.state?.tableData === null
                ? []
                : location?.state?.tableData
            }
            onClick={cancel}
          />
        </div>
      </div>

      <BackGroundImage />
      <Footer />
    </div>
  );
};

export default BankDetail;
