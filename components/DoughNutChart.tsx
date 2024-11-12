"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughNutChart = ({accounts}: DoughnutChartProps) => {
     
    const data ={
        datasets:[
            {
                label:'Banks',
                data:[1250, 2500, 4320],
                backgroundColor:['#0747b6' ,'#2265d8', '#2f91fa']
            }
        ],
        labels : ['Bank 1', 'Bank 2', 'Bank 3']
    }
 
    return (
    <div className="min-w-20">
        <Doughnut 
        data={data} 
        options={{
            cutout:'60%',
            plugins: {
                legend:{
                    display: false
                }
            }
        }}
        />
    </div>
  )
}

export default DoughNutChart