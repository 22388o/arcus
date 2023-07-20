import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

const LineChart = ({data}) => {
    const chartContainer = useRef(null);
  
    useEffect(() => {
      if (chartContainer && chartContainer.current) {
        const newChartInstance = new Chart(chartContainer.current, {
          type: 'line',
          data: data,
          options: {
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day'
                }
              },
            }
          }
        });
  
        return () => {
          newChartInstance.destroy();
        };
      }
    }, [chartContainer, data]);
  
    return (
      <div className="w-full h-64">
        <canvas ref={chartContainer} />
      </div>
    );
  };
  
  export default LineChart;