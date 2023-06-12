import React from 'react'
import { Table } from 'reactstrap';
import {
    useTable,
  } from "react-table";

const SimpleTable = ({
    data, 
    columns
}) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data });
  return (
    <>
      <Table bordered hover {...getTableProps()}>
            <thead className="table-light table-nowrap" >
             {headerGroups.map(headerGroup => (
                <tr  key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, index) => (
                    <th 
                      style={{
                       background:  !column?.parent  ? '#7e97ad  ' : '#d8dde3',
                       color: !column?.parent  ? 'white  ' : 'black',
                       border: '1px solid white'
                      }}
                     key={column.id}  {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
                ))}
          </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()} key={row.getRowProps().key} >
                    {row.cells.map((cell, cellIndex) => (
                       
                        <td style={{
                            fontWeight: '500',
                            background: cell?.row?.index % 2 == 0 ?  '#eceff1' : '#d8dde3'
                        }}  key={cell.id} {...cell.getCellProps()}>
                            {cell.render('Cell')}
                        </td >
                    ))}
                    </tr>
                );
                })}
            </tbody>
      </Table>
    </>
  )
}

export default SimpleTable