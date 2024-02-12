// ScatterPlot.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ScatterPlot = ({ xData, yData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Combine only the first 50 values of x and y data into a single array
      const combinedData = xData.slice(0, 50).map((xValue, index) => ({
        x: xValue?.RandomNumber || 0,
        y: yData[index]?.RandomNumber || 0,
      }));

      const scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'Scatter Plot',
              data: combinedData,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              pointRadius: 6,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              title: {
                display: true,
                text: 'X-axis',
              },
            },
            y: {
              type: 'linear',
              position: 'left',
              title: {
                display: true,
                text: 'Y-axis',
              },
            },
          },
        },
      });

      return () => {
        scatterChart.destroy();
      };
    }
  }, [xData, yData]);

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ScatterPlot;
