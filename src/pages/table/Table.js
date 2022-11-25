import React from "react";
import "./tableComponent.css";

const TableComponent = ({ TableData, dataSub, onClick }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {TableData.map((Item) => {
              console.log("Item", Item);
              var columnWidth = Item.width;
              return <th style={{ width: `${columnWidth}` }}>{Item.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tbody>
            <tr>
              {dataSub.map((item) => {
                console.log("item", item);
                return <td></td>;
              })}
            </tr>
          </tbody>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
