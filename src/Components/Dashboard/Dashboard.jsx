import React from 'react'
import TableSortLabel from '@mui/material/TableSortLabel';


function Dashboard() {
  return (
    <div>
        <TableSortLabel active={false} direction='asc' style={{color: 'red'}}></TableSortLabel>
    </div>
  )
}

export default Dashboard;