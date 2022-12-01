import React from "react";
import "./tableComponent.css";

const TableComponent = ({ TableData, dataSub, onClick }) => {
  return (
    <div className="TableMainDiv">
      <table className="tableCSS">
        <thead>
          <tr className="HeadRow">
            {TableData.map((Item) => {
              return <th className="tableHead">{Item.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataSub && dataSub.length >= 0 && dataSub?.map((item) => {
            return (
              <tr className="tableRow">
                <td className="tableRowValue">
                  <div className="rowItem">{item?.date}</div>
                </td>
                <td className="tableRowValue">
                  <div className="rowItem">{item?.description}</div>
                </td>
                <td className="tableRowValue">
                  <div className="rowItem">{item?.cheq_no}</div>
                </td>
                <td className="tableRowValue">
                  <div className="rowItem">{item?.debit}</div>
                </td>
                <td className="tableRowValue">
                  <div className="rowItem">{item?.credit}</div>
                </td>
                <td className="tableRowValue">
                  <div className="rowItem">{item?.balance}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
