import React, {useEffect, useState} from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const LineChartPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let YData = await fetch("https://retoolapi.dev/o5zMs5/data");
      let XData = await fetch("https://retoolapi.dev/gDa8uC/data");
      let XAxis = await XData.json();
      let YAxis = await YData.json();
      let XAxisData = XAxis.slice(0, 50);
      let YAxisData = YAxis.slice(0, 50);
      let mergeData = [];
      if (XAxisData.length > 0 && YAxisData.length > 0) {
        for (let i = 0; i < 50; i++) {
          mergeData.push({
            XAxisLabel: XAxisData[i].Label,
            XAxisValue: Number(Number(XAxisData[i].RandomNumber).toFixed(2)),
            YAxisLabel: YAxisData[i].Label,
            YAxisValue: Number(Number(YAxisData[i].RandomNumber).toFixed(2)),
          });
        }
      }
      setData(mergeData);
    };
    fetchData();
  }, []);
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="XAxisLabel" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="XAxisValue" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartPlot;
