import React from "react";

const Chart = ({ artistName, artistImage, weeks_on_chart }) => {
  return (
    <div className="chart-container">
      <div className="chart-row">
        <div className="chart-item">
          <p>{weeks_on_chart}</p>
          <img src={artistImage} alt="artist" />
          <h3>{artistName}</h3>
        </div>
      </div>
    </div>
  );
};

export default Chart;
