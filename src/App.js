import logo from "./logo.svg";
import "./App.css";
import {useEffect} from "react";
import LineChartPlot from "./components/LineChartPlot/LineChartPlot";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <LineChartPlot />
    </div>
  );
}

export default App;
