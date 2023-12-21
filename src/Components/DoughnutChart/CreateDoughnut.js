import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import './CreateDoughnut.css'

function CreateDoughnut({data}) {
    
    let total = data[0]+data[1]+data[2];
    let malePercentage = Math.floor(data[0]*100/total);
    let femalePercentage = Math.floor(data[1]*100/total);
    let unknownPercentage = Math.floor(data[2]*100/total);
    const palette = ['rgb(64, 152, 224)', 'rgb(54, 55, 56)', 'rgb(235, 132, 47)'];
    
  return (
    <div className='dashPieChartCont'>
        <PieChart 
            colors={palette}
            margin={{ right: 200}}
            series={[
                {
                data: [
                    { id: 0, value: malePercentage, label: `${malePercentage}% Male` },
                    { id: 1, value: femalePercentage, label: `${femalePercentage}% Female` },
                    { id: 2, value: unknownPercentage, label: `${unknownPercentage}% Unknown` },
                ],
                innerRadius: 80,
                paddingAngle: 1
                }
            ]}
            slotProps={{
                legend: {
                    itemMarkWidth: 40,
                    itemMarkHeight: 10,
                    markGap: 15
                }
            }}
            width={450}
            height={350}
        />
    </div>
  )
}

export default CreateDoughnut;