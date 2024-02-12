// App.js
import React, { useEffect, useState } from 'react';
import ScatterPlot from './ScatterPlot';
import axios from 'axios';

const App = () => {
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const xResponse = await axios.get('https://retoolapi.dev/o5zMs5/data');
        const yResponse = await axios.get('https://retoolapi.dev/gDa8uC/data');

        setXData(xResponse.data);
        setYData(yResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Scatter Plot</h1>
      {xData.length > 0 && yData.length > 0 && (
        <ScatterPlot xData={xData} yData={yData} />
      )}
    </div>
  );
};

export default App;
