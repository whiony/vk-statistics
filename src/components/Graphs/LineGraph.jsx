import React from 'react';
import { Line } from 'react-chartjs-2';

const state = {
  labels: ['31/01', '01/02', '02/02',
    '03/02', '04/02', '05/02', '06/02', '07/02'],
  datasets: [
    {
      label: 'Total',
      fill: false,
      lineTension: 0.4,
      backgroundColor: '#E786D7',
      pointBorderWidth: 0,
      pointHitRadius: 10,
      borderColor: '#7F7FD5',
      borderWidth: 1.9,
      data: [0.8, 1.6, 0.7, 3, 1, 1.5, 2.8, 1.2]
    },
  ]
}

const colors = {
  muted: '#EFF3F9'
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Line
          height={193}
          data={state}
          options={{
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
              legend: {
                display: false,
              }
            },

            title: {
              display: false,
            },

            scales: {
              y: {
                grid: {
                  borderColor: colors.muted,
                  color: colors.muted
                },
                ticks: {
                  stepSize: 1.5,
                  callback: function (value) {
                    return value + '-';
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
                  borderColor: colors.muted,
                  color: colors.muted
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
