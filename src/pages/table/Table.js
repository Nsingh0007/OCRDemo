import React, { useState } from 'react'
import { Table } from 'antd';
import "./tableComponent.css"
import Item from 'antd/es/list/Item';

const TableComponent = ({ TableData, dataSub, onClick }) => {

    const [data, setData] = useState(dataSub);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {TableData.map((Item) => {
                            console.log("Item", Item)
                            var columnWidth = Item.width
                            return (
                                <th style={{ width: `${columnWidth }` }}>{Item.title}</th>
                            )
                        })}
                    </tr>

                </thead>
                <tbody>
                    <tbody>
                        <tr>
                            {dataSub.map((item)=>{
                                console.log("item",item);
                                return(
                                    <td></td>
                                )
                            })}
                            
                        </tr>
                    </tbody>
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent
