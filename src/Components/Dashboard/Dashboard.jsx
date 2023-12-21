import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import {tableAdsData, chartAdsData} from '../AdsData/AdsData'
import CreateTable from '../CreateTable/CreateTable';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import CreateDoughnut from '../DoughnutChart/CreateDoughnut';


function Dashboard() {

  const [pieChart, setPieChart] = useState(true);
  const [selected, setSelected] = useState('clicks');
  const [pieChartData, setPieChartData] = useState([]);

  const handleChange = (e) => {
    setSelected(e.target.value);
  }

  useEffect(() => {
    let data = chartAdsData.tableData.map((ele) => (ele[selected]));
    setPieChartData(data);
    
  }, [selected]);

  return (
    <div className='dashboardCont'>

        <div className='dashChartCont'>
            <h4 className='dashAdInsText'>Ad Insights</h4>
            <CreateTable data={tableAdsData}/>
        </div>

        <div className='dashChartCont'>
          <div className='dashChartAdInsTextCont'>
            <h4 className='dashChartAdInsText'>Ad Insights</h4>
            {
              pieChart && 
              <select className='dashSelect' onChange={handleChange}>
                <option value="clicks">Clicks</option>
                <option value="cost">Cost</option>
                <option value="conversions">Conversions</option>
                <option value="revenue">Revenue</option>
              </select>
            }
          </div>

          {
            pieChart ? <CreateDoughnut data={pieChartData} /> 
            : <CreateTable data={chartAdsData}/>
          }

          <div className='dashToggle' 
            onClick={() => {
              setPieChart(!pieChart);
              setSelected('clicks');
            }}
          >
            <span className={pieChart ? 'dashDonutIcon active' : 'dashDonutIcon'}>
              <DonutLargeOutlinedIcon></DonutLargeOutlinedIcon>
            </span>
            <span className={pieChart ? 'dashDonutIcon' : 'dashDonutIcon active'}>
              <TableChartOutlinedIcon></TableChartOutlinedIcon>
            </span>
          </div>

        </div>
    </div>
  )
}

export default Dashboard;