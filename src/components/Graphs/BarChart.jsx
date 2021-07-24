import React from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
  labels: ['< 18', '18-21', '21-24', '24-27',
    '27-30', '30-35', '35-40', '> 40'],

  datasets: [
    {
      label: 'women',
      backgroundColor: '#E786D7',
      borderRadius: 6,
      barPercentage: 1,
      barThickness: 22,
      maxBarThickness: 22,
      minBarLength: 12,
      data: [1, 1, 1, 37, 20, 1, 10, 1],
    },
    {
      label: 'men',
      borderRadius: 6,
      barThickness: 22,
      maxBarThickness: 22,
      minBarLength: 12,
      data: [1, 20, 20, 20, 1, 1, 1, 8],
      backgroundColor: '#7F7FD5',
    },
  ]
}

export default class BarChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          height={218}
          data={state}
          options={{


            responsive: true,
            maintainAspectRatio: false,

            plugins: {

              title: {
                display: false,
              },
              legend: {
                display: false,
              }
            },

            scales: {
              y: {
                grid: {
                  borderColor: '#EFF3F9',
                  color: '#EFF3F9'
                },
                ticks: {
                  stepSize: 20,
                  callback: function (value) {
                    return value + '%' + '-';
                  },
                  font: {
                    family: 'Gilroy',
                    weight: 500,
                    size: 12,
                  },
                  color: '#979797',
                }
              },
              x: {
                grid: {
                  borderColor: '#EFF3F9',
                  color: '#EFF3F9'
                },
                ticks: {
                  font: {
                    family: 'Gilroy',
                    weight: 500,
                    size: 12,
                  },
                  color: '#979797',
                }
              }
            },



          }}
        />
      </div>
    );
  }
}