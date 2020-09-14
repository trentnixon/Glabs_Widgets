import React ,  { useState,useEffect }from 'react';
// import { useDispatch, useSelector } from "react-redux";
import Chart from "react-apexcharts";


const state = {
      
    series: [44, 55, 13, 43, 22],
    options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
}
const PieChart = ()=>{

    return (
        <div id="chart">
            <Chart options={state.options} series={state.series} type="pie" width={380} />
        </div>
    )

}
export  default PieChart;