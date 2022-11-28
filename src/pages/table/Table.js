import React from "react";
import "./tableComponent.css";

const TableComponent = ({ TableData, dataSub, onClick }) => {
  return (
    <div>
      <table>
        <thead>
          <tr style={{ padding: "0px", gap: "2px" }}>
            {TableData.map((Item) => {
              console.log("Item", Item);
              var columnWidth = Item.width;
              return (
                <th
                  className="tableHead"
                  style={{
                    width: `${columnWidth}`,
                    background: "#E7E7E7",
                    border: "1px solid #E7E7E7",
                  }}
                >
                  {Item.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataSub.map((item) => {
            console.log("item", item);
            return (
              <tr style={{ padding: "0px", gap: "2px" }}>
                <td className="tableRowValue">
                  {" "}
                  <div className="rowItem">{item.date}</div>
                </td>
                <td className="tableRowValue">
                  <div className="rowItem">{item.narration}</div>
                </td>
                <td className="tableRowValue">
                  <div className="rowItem">{item.Chq_No}</div>
                </td>
                <td className="tableRowValue">
                  <div className="rowItem">{item.debit}</div>
                </td>
                <td className="tableRowValue">
                  <div className="rowItem">{item.credit}</div>
                </td>
                <td className="tableRowValue">
                  <div className="rowItem">{item.balance}</div>
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
