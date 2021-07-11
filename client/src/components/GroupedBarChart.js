import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Admin', 'Co-Ordinator', 'Volunteers'],
  datasets: [
    // {
    //   label: '# of Red Votes',
    //   data: [12, 19, 3, 5, 2, 3],
    //   backgroundColor: 'rgb(255, 99, 132)',
    // },
    // {
    //   label: '# of Blue Votes',
    //   data: [2, 3, 20, 5, 1, 4],
    //   backgroundColor: 'rgb(54, 162, 235)',
    // },
    {
      label: 'Our Team',
      data: [25, 64, 170],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBar = () => (
  <>
    
    <Bar data={data} options={options} />
  </>
);

export default GroupedBar;