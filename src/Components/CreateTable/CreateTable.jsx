import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import TableSortLabel from '@mui/material/TableSortLabel';
import './CreateTable.css'

function CreateTable({data}) {
    
    let tableHead = data.tableHead;

    const [tableData, setTableData] = useState(data.tableData);
    const [sortBy, setSortBy] = useState(tableHead[0].toLowerCase());
    const [sortOrder, setSortOrder] = useState('asc');

    let clicksTotal = 0;
    let costTotal = 0;
    let conversionsTotal = 0;
    let revenueTotal = 0;
    data.tableData.forEach((ele) => {
      clicksTotal += ele.clicks;
      costTotal += ele.cost;
      conversionsTotal += ele.conversions;
      revenueTotal += ele.revenue;
    });

    const handleSort = (sortByColumn) => {
      if(sortByColumn === sortBy) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      } else {
        setSortBy(sortByColumn);
        setSortOrder('asc');
      }
    }

    const sortColumn = () => {
      if(sortOrder === 'asc') {
        const sortedData = [...tableData].sort((a, b) => {
          if(a[sortBy] > b[sortBy]) {
            return 1;
          }
          if(a[sortBy] < b[sortBy]) {
            return -1;
          }

          return 0;
        });

        setTableData(sortedData);

      } else {
        const sortedData = [...tableData].sort((a, b) => {
          if(a[sortBy] > b[sortBy]) {
            return -1;
          }
          if(a[sortBy] < b[sortBy]) {
            return 1;
          }

          return 0;
        });

        setTableData(sortedData);
      }
    }

    useEffect(() => {
      sortColumn();

    }, [sortBy, sortOrder]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell onClick={() => {handleSort(tableHead[0].toLowerCase())}} 
                style={{cursor: 'pointer'}}
              >
                {tableHead[0]}
                <TableSortLabel active={ sortBy === tableHead[0].toLowerCase()} 
                  direction={ sortBy === tableHead[0].toLowerCase() ? sortOrder : 'asc' }
                ></TableSortLabel>
              </TableCell>

              <TableCell align="right" onClick={() => {handleSort('clicks')}} 
                style={{cursor: 'pointer'}}
              >
                <TableSortLabel active={ sortBy === 'clicks'} 
                  direction={ sortBy === 'clicks' ? sortOrder : 'asc' }
                ></TableSortLabel>
                {tableHead[1]}
              </TableCell>

              <TableCell align="right" onClick={() => {handleSort('cost')}} 
                style={{cursor: 'pointer'}}
              >
                <TableSortLabel active={ sortBy === 'cost'} 
                  direction={ sortBy === 'cost' ? sortOrder : 'asc' }
                ></TableSortLabel>
                {tableHead[2]}
              </TableCell>

              <TableCell align="right" onClick={() => {handleSort('conversions')}} 
                style={{cursor: 'pointer'}}
              >
                <TableSortLabel active={ sortBy === 'conversions'} 
                  direction={ sortBy === 'conversions' ? sortOrder : 'asc' }
                ></TableSortLabel>
                {tableHead[3]}
              </TableCell>

              <TableCell align="right" onClick={() => {handleSort('revenue')}} 
                style={{cursor: 'pointer'}}
              >
                <TableSortLabel active={ sortBy === 'revenue'} 
                  direction={ sortBy === 'revenue' ? sortOrder : 'asc' }
                ></TableSortLabel>
                {tableHead[4]}
              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody className='dashTableBody'>
            {tableData.map((ele,ind) => (
              <TableRow
                key={`tableData-${ind}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell style={{color: 'rgb(145, 140, 140)'}} component="th" scope="row">{ele[Object.keys(ele)[1]]}</TableCell>
                <TableCell style={{color: 'rgb(145, 140, 140)'}} align="right">{ele.clicks}</TableCell>
                <TableCell style={{color: 'rgb(145, 140, 140)'}} align="right">USD {ele.cost}</TableCell>
                <TableCell style={{color: 'rgb(145, 140, 140)'}} align="right">{ele.conversions}</TableCell>
                <TableCell style={{color: 'rgb(145, 140, 140)'}} align="right">USD {ele.revenue}</TableCell>
              </TableRow>
            ))}
            <TableRow className='dashtableTotalRow'>
              <TableCell style={{color: 'rgb(145, 140, 140)'}} component="th" scope="row">Total</TableCell>
              <TableCell style={{color: 'rgb(145, 140, 140)'}} align="right">{clicksTotal}</TableCell>
              <TableCell style={{color: 'rgb(145, 140, 140)'}} align="right">USD {costTotal}</TableCell>
              <TableCell style={{color: 'rgb(145, 140, 140)'}} align="right">{conversionsTotal}</TableCell>
              <TableCell style={{color: 'rgb(145, 140, 140)'}} align="right">USD {revenueTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CreateTable;