import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData, price }) {
  return (
    <div className="chart-container">
      <div className="chart-text">
        <h2 className="hh">{price}</h2>
        <div className='blink'/>
      </div>
      <Line
        id="chart"
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;