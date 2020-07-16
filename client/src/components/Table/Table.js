import React from 'react';

const TableRow = ({ tableCells }) => {
  return (
    <tr>
      {Object.keys(tableCells).map((key, index) => (
        <td key={index}>{tableCells[key]}</td>
      ))}
    </tr>
  )
}

const Table = ({ headers, data }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <TableRow key={index} tableCells={data}/>
        ))}
      </tbody>
    </table>
  )
}

export default Table;