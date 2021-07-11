import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Bright Spark Education', 'Transformers', 'Food and Nutrition' , 'Gender', 'Youngistaan Animal Heroes', 'Blood Donor'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 25, 135 , 40 , 50 ,40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const options = {
    responsive:true,
   plugins: {
    title: {
        display: true,
        text: "Team",
      },
    legend: {
        labels : {
            color : 'rgba(0, 0, 0)'
        } 
    },
   },
    scales: {
        yAxes: [{
          ticks:  {
           
            color : 'rgba(255, 255, 255)'
              
            },
        },],
         
        
      },
};

const DoughnutChart = () => (
  <>
     
    <Doughnut data={data} options={options}  options={{ maintainAspectRatio: false }}/>
    
  </>
);

export default DoughnutChart;