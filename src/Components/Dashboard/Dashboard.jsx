import React, { useState } from 'react'
import './Dashboard.css'
import {tableAdsData, chartAdsData} from '../AdsData/AdsData'
import CreateTable from '../CreateTable/CreateTable';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';


function Dashboard() {

  const [chart, setChart] = useState(true);

  return (
    <div className='dashboardCont'>

        <div className='dashChartCont'>
            <h4 className='dashAdInsText'>Ad Insights</h4>
            <CreateTable data={tableAdsData}/>
        </div>

        <div className='dashChartCont'>
          <div className='dashChartAdInsTextCont'>
            <h4 className='dashChartAdInsText'>Ad Insights</h4>
            <select className='dashSelect'>
              <option value="clicks">Clicks</option>
              <option value="cost">Cost</option>
              <option value="conversions">Conversions</option>
              <option value="revenue">Revenue</option>
            </select>
          </div>
          {/* <CreateTable data={chartAdsData}/> */}
          <div className='dashToggle'>
            <span className='dashDonutIcon'>
              <DonutLargeOutlinedIcon></DonutLargeOutlinedIcon>
            </span>
            <span className='dashDonutIcon'>
              <TableChartOutlinedIcon></TableChartOutlinedIcon>
            </span>
            
          </div>
        </div>
    </div>
  )
}

export default Dashboard;